//  Library
import * as fs from 'node:fs'

//  Type Definitions
import { Adapter } from '../types'

//  ------------
//  Text Adapter
//  ------------

type Text = string | Buffer

export class TextAdapter<T = Text> implements Adapter<Text, T> {

    constructor(private fileName: string, private encoding?: BufferEncoding) {
    }

    async read(): Promise<T | undefined> {
        let contents: Text
        try {
            contents = await fs.promises.readFile(this.fileName, { encoding: this.encoding })
        } catch (err) {
            throw err
        }
        return this.parse(contents)
    }

    parse(input: Text): T {
        return input as T
    }

    serialize(output: T): Text {
        return output as Text
    }

    async write(data: T): Promise<void> {
        const contents = this.serialize(data)
        return fs.promises.writeFile(this.fileName, contents, { encoding: this.encoding })
    }

}
