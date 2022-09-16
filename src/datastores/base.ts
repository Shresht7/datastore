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

export class DataStore<T, S = T> {

    public data: T | null = null

    private adapter: IAdapter<S>

    private transformer: ITransformer<T, S>

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
