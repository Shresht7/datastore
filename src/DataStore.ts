//  Library
import { LocalStorageAdapter, MemoryAdapter, TextAdapter } from './adapters'
import { JSONTransformer } from './transformers'

//  Type Definitions
import { Adapter, Transformer, Kind } from './types'

//  ---------
//  DataStore
//  ---------

type DataStoreOpts<T> = {
    kind: Kind.MEMORY
    transformer?: Transformer<T>
    default?: T
} | {
    kind: Kind.LOCAL_STORAGE
    keyName: string
    transformer?: Transformer<T, string>
    default?: T
} | {
    kind?: Kind.FILE_SYSTEM
    file: string
    encoding?: BufferEncoding
    transformer?: Transformer<T, string>
    default?: T
}

const defaultOptions: DataStoreOpts<any> = {
    kind: Kind.MEMORY,
}

export class DataStore<T> {

    public data: T | undefined
    private adapter: Adapter<any>
    private transformer: Transformer<T, any>

    constructor(private options: DataStoreOpts<T> = defaultOptions) {
        this.data = this.options.default
        this.adapter = this._loadAdapter()
        this.transformer = this.options.transformer || new JSONTransformer<T>()
    }

    private _loadAdapter() {
        switch (this.options.kind) {
            case Kind.FILE_SYSTEM:
                return new TextAdapter(this.options.file, this.options.encoding || 'utf-8')
            case Kind.LOCAL_STORAGE:
                return new LocalStorageAdapter(this.options.keyName)
            case Kind.MEMORY:
                return new MemoryAdapter<T>()
            default:
                return new MemoryAdapter<T>()
        }
    }

    async read() {
        const contents = await this.adapter.read()
        if (!contents) { return }
        this.data = this.transformer.parse(contents)
        return this.data
    }

    async write(data: T) {
        const contents = this.transformer.serialize(data)
        return this.adapter.write(contents)
    }

}
