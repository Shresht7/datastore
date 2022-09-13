//  Library
import { FSAdapter, LocalStorageAdapter, MemoryAdapter } from './adapters'
import { Transformer, NonTransformer, JSONTransformer } from './transformers'

//  Type Definitions
import { IAdapter, ITransformer } from './types'

//  ---------
//  DataStore
//  ---------

interface DataStoreOptions<T, S> {
    data?: T
    adapter: IAdapter<S>
    transformer: ITransformer<T, S>
}

export class DataStore<T, S = T> {

    public data: T | null = null

    private adapter: IAdapter<S>

    private transformer: Transformer<T, S>

    constructor(options: DataStoreOptions<T, S>) {
        this.data = options.data || null
        this.adapter = options.adapter
        this.transformer = options.transformer
    }

    public async read() {
        const contents = await this.adapter.read()
        if (!contents) { return }
        this.data = this.transformer.parse(contents)
        return this.data
    }

    public async write(data: T) {
        let contents = this.transformer.serialize(data)
        return this.adapter.write(contents)
    }

}

interface MemoryDataStoreOptions<T> extends Partial<DataStoreOptions<T, T>> { }

export class MemoryDataStore<T> extends DataStore<T, T> {
    constructor(options: MemoryDataStoreOptions<T> = {}) {
        super({
            adapter: new MemoryAdapter<T>(),
            transformer: new NonTransformer<T>(),
            ...options
        })
    }

}

interface FSDataStoreOptions<T> extends Partial<DataStoreOptions<T, string>> {
    file: string
    encoding?: BufferEncoding
}

export class FSDataStore<T> extends DataStore<T, string> {
    constructor(options: FSDataStoreOptions<T>) {
        super({
            adapter: new FSAdapter(options.file, options.encoding),
            transformer: new JSONTransformer(),
            ...options,
        })
    }

}

interface LocalStorageDataStoreOptions<T> extends Partial<DataStoreOptions<T, string>> {
    key: string
}

export class LocalStorageDataStore<T> extends DataStore<T, string> {
    constructor(options: LocalStorageDataStoreOptions<T>) {
        super({
            adapter: new LocalStorageAdapter(options.key),
            transformer: new JSONTransformer(),
            ...options
        })
    }
}
