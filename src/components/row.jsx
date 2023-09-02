import Cell from "./cell"

export const Row = (prop) =>{
    const data = prop.header ?  Object.keys(prop.data) : Object.values(prop.data)
    return (<tr>{data.map((d,i)=><Cell key={i} data={d} index={i} header={prop.header}/>)}</tr>)
}

export default Row