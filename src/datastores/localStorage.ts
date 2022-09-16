//  Library
import { DataStore, DataStoreOptions } from './base'
import { LocalStorageAdapter } from '../adapters'
import { JSONTransformer } from '../transformers'

//  -----------------------
//  Local Storage DataStore
//  -----------------------

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
