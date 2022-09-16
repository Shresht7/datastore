//  Library
import { DataStore, DataStoreOptions } from './base'
import { MemoryAdapter } from '../adapters'
import { NonTransformer } from '../transformers'

//  ----------------
//  Memory DataStore
//  ----------------

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
