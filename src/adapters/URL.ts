//  Type Definitions
import type { IAdapter } from '../types'

//  -----------
//  URL Adapter
//  -----------

/** Implements reading from a URL */
export class URLAdapter implements IAdapter<string> {

    constructor(private url: string | URL) { }

    /** Reads from a URL */
    async read() {
        return fetch(this.url).then(res => res.text())
    }

    /** Does nothing. */
    async write(data: string) { }

}
