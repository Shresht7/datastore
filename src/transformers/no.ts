import { Transformer } from './base'

export class NonTransformer<T> extends Transformer<T, T> {
    constructor() {
        super({
            parse: (s: T): T => s,
            serialize: (data: T): T => data,
        })
    }
}
