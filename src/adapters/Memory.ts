//  Type Definitions
import type { Adapter } from '../types'

//  --------------
//  Memory Adapter
//  --------------

export class MemoryAdapter<T> implements Adapter<T> {

    private data: T | undefined

    constructor() { }

    read(): T | undefined {
        return this.data
    }

    write(data: T) {
        return this.data = data
    }

}
