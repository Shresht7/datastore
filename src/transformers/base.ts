//  Type Definitions
import type { Transformer } from '../types'

export class BaseTransformer<T> implements Transformer<T, T> {

    constructor() { }

    parse(s: T): T { return s }

    serialize(data: T): T { return data }

}
