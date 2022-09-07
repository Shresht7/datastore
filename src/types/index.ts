//  ----------------
//  TYPE DEFINITIONS
//  ----------------

export interface Adapter<T> {
    read: () => Promise<T>
    write: (data: T) => Promise<void>
}
