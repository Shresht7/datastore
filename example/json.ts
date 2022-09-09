import { DataStore } from '../src'

interface Data {
    old: number
    new: number
}

const datastore = new DataStore<Data>({
    file: 'example/db.json',
    default: { old: 0, new: 0 }
})

export async function jsonTest() {

    await datastore.read()

    console.log('Read', datastore.data)

    const _old = datastore.data?.new || 0
    datastore.data = {
        old: _old,
        new: Math.ceil((Math.random() * 100))
    }

    console.log('Write', datastore.data)

    await datastore.write(datastore.data)

}

jsonTest()
