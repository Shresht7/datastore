//  Type Definitions
import type { Adapter } from '../types'

//  ---------------------
//  Local Storage Adapter
//  ---------------------

export class LocalStorageAdapter<T> implements Adapter<string, T> {

    private keyName: string

    constructor(fileName: string) {
        this.keyName = fileName
    }

    read() {
        return new Promise<T>((resolve, reject) => {
            const data = window.localStorage.getItem(this.keyName) || ''
            resolve(this.parse(data))
        })
    }

    parse(str: string): T {
        return JSON.parse(str)
    }

    serialize(data: T): string {
        return JSON.stringify(data)
    }

    write(data: T) {
        return new Promise<void>((resolve, reject) => {
            const contents = this.serialize(data)
            window.localStorage.setItem(this.keyName, contents)
            resolve()
        })
    }

}
