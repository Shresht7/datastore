//  -------------
//  Utility Types
//  -------------

export type Promisify<Fn extends (...args: any[]) => any> = (...args: Parameters<Fn>) => Promise<ReturnType<Fn>>
