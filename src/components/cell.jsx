export const Cell = prop =>{
    const cell = ()=>{
        if (prop.index===0){
            return (prop.header ? <th/> : <td><img src={prop.data} alt=""/></td>)
        }else{
            return (prop.header ? <th>{prop.data}</th> : <td>{prop.data}</td>) 
        }
    }
    return cell()
}

export default Cell