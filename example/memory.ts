import { MemoryDataStore } from '../src'

const datastore = new MemoryDataStore<number[]>()

export async function memoryTest() {

    await datastore.read()

    console.log('Read', datastore.data)

    datastore.data = new Array(5).fill(0).map(_ => Math.ceil(Math.random() * 100))

    console.log('Write', datastore.data)

    await datastore.write(datastore.data)

}

async function main() {
    await memoryTest()
    await memoryTest()
    await memoryTest()
}

main()
