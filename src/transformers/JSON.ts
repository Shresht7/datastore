//  Library
import type { Transformer } from '../types'

//  ------------
//  JSON Adapter
//  ------------

export class JSONTransformer<T> implements Transformer<T, string> {

    constructor() { }

    parse(input: string): T {
        return JSON.parse(input)
    }

    serialize(output: T): string {
        return JSON.stringify(output, null, 2)
    }

}
