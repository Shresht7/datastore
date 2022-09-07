//  Library
import * as fs from 'node:fs'
import * as path from 'node:path'
import {
    MemoryAdapter,
    TextAdapter,
} from './adapters'

//  Type Definitions
import type { Adapter } from './types'

//  ---------
//  DataStore
//  ---------

interface DataStoreOptions {
    encoding?: BufferEncoding
}

const defaultOptions: DataStoreOptions = {
    encoding: 'utf-8'
}

export class DataStore<T> {

    public data: T | undefined

    private adapter: Adapter<any>

    constructor(private readonly fileName: string, private options: DataStoreOptions = defaultOptions) {
        if (!fs.existsSync(fileName)) {
            fs.writeFileSync(fileName, '', this.options.encoding)
        }
        this.adapter = this.getAdapter()
    }

    private getAdapter() {
        const extName = path.extname(this.fileName)
        if (['.txt', '.text'].includes(extName)) {
            return new TextAdapter(this.fileName, this.options.encoding)
        }
        return new MemoryAdapter<T>()
    }

    async read(): Promise<T | undefined> {
        this.data = await this.adapter.read()
        return this.data
    }

    async write(data?: T): Promise<void> {
        if (!data) { return }
        return this.adapter.write(data)
    }

}
