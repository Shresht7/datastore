//  Library
import * as fs from 'node:fs'

//  Type Definitions
import { Adapter } from '../types'

//  ------------
//  JSON Adapter
//  ------------

export class JSONAdapter<T> implements Adapter<T> {

    constructor(private fileName: string, private encoding?: BufferEncoding) {
    }

    async read(): Promise<T> {
        let contents: string | Buffer
        try {
            contents = await fs.promises.readFile(this.fileName, { encoding: this.encoding })
            return JSON.parse(contents.toString())
        } catch (err) {
            throw err
        }
    }

    async write(data: T): Promise<void> {
        const contents = JSON.stringify(data, null, 2)
        return fs.promises.writeFile(this.fileName, contents, { encoding: this.encoding })
    }

}
