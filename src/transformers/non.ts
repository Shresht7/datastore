//  Library
import { Transformer } from './base'

/** Does not perform any transformation when parsing or serializing. */
export class NonTransformer<T> extends Transformer<T, T> {
    constructor() {
        super({
            parse: (s: T): T => s,
            serialize: (data: T): T => data,
        })
    }
}
