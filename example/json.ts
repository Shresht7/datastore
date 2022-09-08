import { DataStore } from '../src'

interface Data {
    old: number
    new: number
}

const datastore = new DataStore<Data>({ file: 'example/db.json' })

export async function jsonTest() {

    const data = await datastore.read() || { old: 0, new: 0 }

    console.log('Read', data)

    data.old = data?.new || 0
    data.new = Math.ceil((Math.random() * 100))

    console.log('Write', data)

    await datastore.write(datastore.data)

}

jsonTest()
