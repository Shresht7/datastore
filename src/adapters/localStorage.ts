//  Type Definitions
import type { IAdapter } from '../types'

//  ---------------------
//  Local Storage Adapter
//  ---------------------

/** Implements read and write to the browser's local-storage */
export class LocalStorageAdapter implements IAdapter<string> {

    constructor(private keyName: string) { }

    /** Read from the browser's local-storage */
    read(): string | undefined {
        return global.localStorage.getItem(this.keyName) || undefined
    }

    /** Write to the browser's local-storage */
    write(data: string) {
        return global.localStorage.setItem(this.keyName, data)
    }

}
