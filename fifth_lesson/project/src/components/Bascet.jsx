import { BascetItem } from "./BascetItem"

export const Bascet = ({items, onAdd, id, onReduce, onremove}) =>{
    return <div>
        <h3>Bascet</h3>
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Count</th>
                    <th>Subtotal</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {

                items.map(elm => <BascetItem key = {elm.id} {...elm} onAdd = {onAdd} onReduce = {onReduce} onremove = {onremove}/>)
                }
            </tbody>
        </table>
    </div>
}