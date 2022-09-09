//  Type Definitions
import type { Adapter } from '../types'

//  ---------------------
//  Local Storage Adapter
//  ---------------------

export class LocalStorageAdapter implements Adapter<string> {

    constructor(private keyName: string) { }

    read(): string | undefined {
        return global.localStorage.getItem(this.keyName) || undefined
    }

    write(data: string) {
        return global.localStorage.setItem(this.keyName, data)
    }

}
