//  Library
import { DataStore, DataStoreOptions } from './base'
import { FSAdapter } from '../adapters'
import { JSONTransformer } from '../transformers'

//  ---------------------
//  File-System DataStore
//  ---------------------

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
