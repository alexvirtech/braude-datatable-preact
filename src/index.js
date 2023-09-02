import './style'
import Table from './components/table'
import {useEffect, useState} from 'preact/hooks'

export default function App() {
    const [data, setData] = useState()

    const fd = ['thumbnail', 'id', 'title', 'price', 'brand', 'category', 'description']
    const url = `https://dummyjson.com/products?limit=10&skip=0&select=${fd.join(',')}`

    const reorder = (obj) => {
        const ar = []
        obj.forEach(o => {
            const sortedObj = {}
            fd.forEach(key => {
                sortedObj[key] = o[key]
            })
            ar.push(sortedObj)
        })
        return ar
    }

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(d => {                
                const ordered = reorder(d.products)
                setData(ordered)
            })
    }, [])

    return (
        <div className="App mb-4">
        <div className='container'>
            <h3 className='text-left my-4'>Product List - Preact JS, Bootstrap</h3>
            {data && <Table data={data} />}
        </div>
    </div>
    )
}
