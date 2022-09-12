//  Utils
import { Promisify } from './utils'

//  ----------------
//  TYPE DEFINITIONS
//  ----------------

type Reader<T> = () => T | undefined
type Writer<T> = (data: T) => void

type AsyncReader<T> = Promisify<Reader<T>>
type AsyncWriter<T> = Promisify<Writer<T>>

export interface IAdapter<T> {
    read: Reader<T> | AsyncReader<T>
    write: Writer<T> | AsyncWriter<T>
}

export interface ITransformer<T, S> {
    parse: (s: S) => T
    serialize: (data: T) => S
}
