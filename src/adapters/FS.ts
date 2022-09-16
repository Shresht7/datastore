//  Library
import * as fs from 'node:fs'

//  Type Definitions
import type { IAdapter } from '../types'

//  -------------------
//  File System Adapter
//  -------------------

/** Implements read and write to the file-system  */
export class FSAdapter implements IAdapter<string> {

    constructor(private fileName: string, private encoding?: BufferEncoding) { }

    /** Read from the file-system */
    async read(): Promise<string | undefined> {
        return fs.promises.readFile(this.fileName, { encoding: this.encoding }).then(res => res.toString())
    }

    /** Write to the file-system */
    async write(data: string): Promise<void> {
        //  TODO: #3 It is unsafe to use `fs.promises.writeFile()` multiple times on the same file without waiting for the promise to be settled
        return fs.promises.writeFile(this.fileName, data, { encoding: this.encoding })
    }

}
