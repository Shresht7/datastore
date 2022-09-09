//  Utils
import { Promisify } from './utils'

//  ----------------
//  TYPE DEFINITIONS
//  ----------------

type Reader<T> = () => T | undefined
type Writer<T> = (data: T) => void

type AsyncReader<T> = Promisify<Reader<T>>
type AsyncWriter<T> = Promisify<Writer<T>>

export interface Adapter<T> {
    read: Reader<T> | AsyncReader<T>
    write: Writer<T> | AsyncWriter<T>
}

export interface Transformer<T, S = T> {
    parse: (s: S) => T
    serialize: (data: T) => S
}

export enum Kind {
    MEMORY = 'memory',
    FILE_SYSTEM = 'file_system',
    LOCAL_STORAGE = 'local_storage'
}
