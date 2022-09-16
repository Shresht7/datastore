//  Type Definitions
import type { IAdapter } from '../types'

//  --------------
//  Memory Adapter
//  --------------

/** Implements read and write to memory */
export class MemoryAdapter<T> implements IAdapter<T> {

    private data: T | undefined

    constructor() { }

    /** Read from the memory */
    read(): T | undefined {
        return this.data
    }

    /** Write to the memory */
    write(data: T) {
        return this.data = data
    }

}
