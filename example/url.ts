import { DataStore } from '../src'
import { URLAdapter } from '../src/adapters'
import { NonTransformer } from '../src/transformers'

const datastore = new DataStore<string>({
    adapter: new URLAdapter('https://api.github.com/zen'),
    transformer: new NonTransformer()
})

export async function urlTest() {

    await datastore.read()

    console.log('Read', datastore.data)

}

urlTest()
