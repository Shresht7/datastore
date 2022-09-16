//  Library
import { Transformer } from './base'

/** Transformer to parse and stringify JSON objects */
export class JSONTransformer<T> extends Transformer<T, string> {
    constructor() {
        super({
            parse: (s: string): T => JSON.parse(s),
            serialize: (data: T): string => JSON.stringify(data)
        })
    }
}
