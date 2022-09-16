import { FSDataStore } from '../src'

const datastore = new FSDataStore<number[]>({
    file: 'example/db.txt',
    transformer: {
        parse: (s: string): number[] => s.split(', ').map(x => Number(x)),
        serialize: (data: number[]): string => data.join(', ')
    }
})

export async function textTest() {

    await datastore.read()

    console.log('Read', datastore.data)

    datastore.data = new Array(5).fill(0).map(_ => Math.ceil(Math.random() * 100))

    console.log('Write', datastore.data)

    await datastore.write(datastore.data)

}

textTest()
