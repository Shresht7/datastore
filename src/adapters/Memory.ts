//  Type Definitions
import type { IAdapter } from '../types'

//  --------------
//  Memory Adapter
//  --------------

export class MemoryAdapter<T> implements IAdapter<T> {

    private data: T | undefined

    constructor() { }

    read(): T | undefined {
        return this.data
    }

    write(data: T) {
        return this.data = data
    }

}
