//  Library
import * as fs from 'node:fs'

//  Type Definitions
import type { IAdapter } from '../types'

//  ------------
//  Text Adapter
//  ------------

export class FSAdapter implements IAdapter<string> {

    constructor(private fileName: string, private encoding?: BufferEncoding) {
    }

    read(): Promise<string | undefined> {
        return fs.promises.readFile(this.fileName, { encoding: this.encoding }).then(res => res.toString())
    }

    write(data: string): Promise<void> {
        //  TODO: It is unsafe to use `fs.promises.writeFile()` multiple times on the same file without waiting for the promise to be settled
        return fs.promises.writeFile(this.fileName, data, { encoding: this.encoding })
    }

}
