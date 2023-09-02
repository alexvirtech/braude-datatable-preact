import Row from "./row"

export const Table = (prop) => {
    return (
    <div className="table-responsive pb-5">
        <table className='table table-bordered table-hover'>
            <thead>{<Row data={prop.data[0]} header={true}/>}</thead>
            <tbody>{prop.data.map((d,i)=><Row key={i} data={d} header={false}/>)}</tbody>
        </table>
    </div>
    )
}

export default Table