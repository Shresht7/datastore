//  -------------
//  Utility Types
//  -------------

/** Promisify a function */
export type Promisify<Fn extends (...args: any[]) => any> = (...args: Parameters<Fn>) => Promise<ReturnType<Fn>>
