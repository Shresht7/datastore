//  Type Definitions
import type { Adapter } from '../types'

//  --------------
//  Memory Adapter
//  --------------

export class MemoryAdapter<T> implements Adapter<T> {

    private data: T | undefined

    constructor() {
    }

    read(): Promise<T | undefined> {
        return Promise.resolve(this.data)
    }

    write(data: T): Promise<void> {
        this.data = data
        return Promise.resolve()
    }

}
