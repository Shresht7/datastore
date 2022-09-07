//  Library
import * as fs from 'node:fs'
import * as path from 'node:path'
import {
    JSONAdapter,
    MemoryAdapter,
    TextAdapter,
} from './adapters'

//  Type Definitions
import type { Adapter } from './types'

//  ---------
//  DataStore
//  ---------

interface DataStoreOptions {
    file?: string
    encoding?: BufferEncoding
}

const defaultOptions: DataStoreOptions = {
    encoding: 'utf-8'
}

export class DataStore<T> {

    public data: T | undefined

    private adapter: Adapter<any>

    constructor(private options: DataStoreOptions = defaultOptions) {
        this.adapter = this.getAdapter()
    }

    private getAdapter() {
        if (!this.options.file) {
            //  Use the Memory Adapter if no file was specified
            return new MemoryAdapter<T>()
        } else {
            //  Check if the file exists, and create it if it doesn't
            if (!fs.existsSync(this.options.file)) {
                fs.writeFileSync(this.options.file, '', this.options.encoding)
            }

            //  Retrieve the correct adapter based on the file extension
            const extName = path.extname(this.options.file)
            if (['.txt', '.text'].includes(extName)) {
                return new TextAdapter(this.options.file, this.options.encoding)
            } else if (['.json'].includes(extName)) {
                return new JSONAdapter(this.options.file, this.options.encoding)
            }
        }

        //  Fallback to MemoryAdapter if no other adapter was selected
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
