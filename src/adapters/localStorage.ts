//  Type Definitions
import type { IAdapter } from '../types'

//  ---------------------
//  Local Storage Adapter
//  ---------------------

export class LocalStorageAdapter implements IAdapter<string> {

    constructor(private keyName: string) { }

    read(): string | undefined {
        return global.localStorage.getItem(this.keyName) || undefined
    }

    write(data: string) {
        return global.localStorage.setItem(this.keyName, data)
    }

}
