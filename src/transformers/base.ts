//  Type Definitions
import type { ITransformer } from '../types'

//  -----------
//  TRANSFORMER
//  -----------

/** Does not perform any transformation. */
export abstract class Transformer<T, S> implements ITransformer<T, S> {

    public parse(s: S): T { return s as unknown as T }

    public serialize(data: T): S { return data as unknown as S }

    constructor(options: Partial<ITransformer<T, S>> = {}) {
        this.parse = options.parse || this.parse
        this.serialize = options.serialize || this.serialize
    }

}
