import { DataStore } from '../src'

const datastore = new DataStore<string>({ file: 'example/db.txt' })

export async function textTest() {

    await datastore.read()

    console.log('Read', datastore.data?.toString())

    datastore.data = Math.ceil(Math.random() * 100).toString()

    console.log('Write', datastore.data)

    await datastore.write(datastore.data)

}

textTest()
