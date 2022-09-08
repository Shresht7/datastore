//  Library
import { TextAdapter } from './Text'

//  ------------
//  JSON Adapter
//  ------------

export class JSONAdapter<T> extends TextAdapter<T> {

    constructor(fileName: string, encoding?: BufferEncoding) {
        super(fileName, encoding)
    }

    parse(input: string): T {
        return JSON.parse(input)
    }

    serialize(output: T): string {
        return JSON.stringify(output, null, 2)
    }

}
