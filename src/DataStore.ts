//  ---------
//  DataStore
//  ---------

export class DataStore<T> {

    public readonly data: T | null = null

    constructor(private fileName: string) {
    }

    async read(): Promise<void> {
        console.log('Async Read')
    }

    async write(): Promise<void> {
        console.log('Async Write')
    }

}
