export const BascetItem = ({title, price, count, id, onAdd, onReduce, onremove}) =>{
    let subtotal = count * price
    return <tr>
        <td>{title}</td>
        <td>{price}</td>
        <td>{count}</td>
        <td>{subtotal}</td>
        <td>
            <button onClick = {() => onAdd(id)}>+</button>
            <button onClick = {() => onReduce(id)}>-</button>
            <button onClick = {() => onremove(id)}>X</button>
        </td>
    </tr>
}