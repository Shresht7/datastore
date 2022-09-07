//  Library
import * as fs from 'node:fs'

//  Type Definitions
import { Adapter } from '../types'

//  ------------
//  Text Adapter
//  ------------

export class TextAdapter implements Adapter<string | Buffer> {

    constructor(private fileName: string, private encoding?: BufferEncoding) {
    }

    async read(): Promise<string | Buffer> {
        try {
            return fs.promises.readFile(this.fileName, { encoding: this.encoding })
        } catch (err) {
            throw err
        }
    }

    async write(data: string | Buffer): Promise<void> {
        return fs.promises.writeFile(this.fileName, data, { encoding: this.encoding })
    }

}
