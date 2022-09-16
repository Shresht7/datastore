//  Type Definitions
import type { IAdapter, ITransformer } from '../types'

//  ---------
//  DataStore
//  ---------

export interface DataStoreOptions<T, S> {
    data?: T
    adapter: IAdapter<S>
    transformer: ITransformer<T, S>
}

/** The DataStore reads and writes data to persistent storage */
export class DataStore<T, S = T> {

    public data: T | null = null

    /** Implements read and write methods */
    private adapter: IAdapter<S>

    /** Implements parse and serialize methods */
    private transformer: ITransformer<T, S>

    constructor(options: DataStoreOptions<T, S>) {
        this.data = options.data || null
        this.adapter = options.adapter
        this.transformer = options.transformer
    }

    /** The data is read from the source using the Adapter and is then parsed using the Transformer */
    public async read() {
        const contents = await this.adapter.read()
        if (!contents) { return }
        this.data = this.transformer.parse(contents)
        return this.data
    }

    /** The data is serialized using the Transformer and then written to destination using the Adapter */
    public async write(data: T) {
        let contents = this.transformer.serialize(data)
        return this.adapter.write(contents)
    }

}
