//  Library
import * as fs from 'node:fs'

//  Type Definitions
import type { Adapter } from '../types'

//  ------------
//  Text Adapter
//  ------------

export class TextAdapter implements Adapter<string> {

    constructor(private fileName: string, private encoding?: BufferEncoding) {
    }

    read(): Promise<string | undefined> {
        return fs.promises.readFile(this.fileName, { encoding: this.encoding }).then(res => res.toString())
    }

    write(data: string): Promise<void> {
        return fs.promises.writeFile(this.fileName, data, { encoding: this.encoding })
    }

}
