//  Utils
import { Promisify } from './utils'

//  ----------------
//  TYPE DEFINITIONS
//  ----------------

/** Implements some reading mechanism and returns the read contents */
type Reader<T> = () => T | undefined
/** Implements some writing mechanism */
type Writer<T> = (data: T) => void

/** Implements some asynchronous reading mechanism and returns the promise of the read contents */
type AsyncReader<T> = Promisify<Reader<T>>
/** Implements some asynchronous writing mechanism */
type AsyncWriter<T> = Promisify<Writer<T>>

/**
 * Adapters are responsible for handling the `read` and `write` mechanisms. This can be from the disk,
 * or from memory, or any other storage. Adapters implement read and write methods.
 * @property `read` {@link IAdapter.read}
 * @property `write` {@link IAdapter.write}
 */
export interface IAdapter<T> {
    read: Reader<T> | AsyncReader<T>
    write: Writer<T> | AsyncWriter<T>
}

/**
 * Transformers are responsible for parsing and serializing the data from and to the Adapter.
 * Transformers implement the parse and serialize methods.
 * @property `parse` {@link ITransformer.parse}
 * @property `serialize` {@link ITransformer.serialize}
 */
export interface ITransformer<T, S> {
    parse: (s: S) => T
    serialize: (data: T) => S
}
