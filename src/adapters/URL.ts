//  Type Definitions
import type { IAdapter } from '../types'

//  -----------
//  URL Adapter
//  -----------

export class URLAdapter implements IAdapter<string> {

    constructor(private url: string | URL) { }

    async read() {
        return fetch(this.url).then(res => res.text())
    }

    async write(data: string) { }

}
