//  Library
import { DataStore } from '../src'

const datastore = new DataStore<string>('db.txt')

async function main() {

    await datastore.read()

    console.log(datastore.data)

    datastore.data = 'Hello World'

    console.log(datastore.data)

    await datastore.write(datastore.data)

}

main()
