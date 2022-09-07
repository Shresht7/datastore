//  Library
import { DataStore } from '../src'

const datastore = new DataStore<string>('db.json')

async function main() {

    await datastore.read()

    console.log(datastore.data)

    await datastore.write()

}

main()
