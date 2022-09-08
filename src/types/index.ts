//  ----------------
//  TYPE DEFINITIONS
//  ----------------

export interface Adapter<S, T = S> {
    read: () => Promise<T | undefined>
    parse?: (input: S) => T
    serialize?: (output: T) => S
    write: (data: T) => Promise<void>
}
