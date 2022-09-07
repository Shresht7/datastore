//  Library
import { DataStore } from '../src'

const datastore = new DataStore({ file: 'db.json' })

async function main() {

    await datastore.read()

    console.log(datastore.data)

    datastore.data = {
        one: 1,
        two: [2, 2],
        three: {
            wow: "!!!"
        }
    }

    console.log(datastore.data)

    await datastore.write(datastore.data)

}

main()
