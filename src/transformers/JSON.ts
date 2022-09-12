import { Transformer } from './base'

export class JSONTransformer<T> extends Transformer<T, string> {
    constructor() {
        super({
            parse: (s: string): T => JSON.parse(s),
            serialize: (data: T): string => JSON.stringify(data)
        })
    }
}
