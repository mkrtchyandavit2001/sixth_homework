import { ProductItem } from "./ProductItem";

export const ProductList = ({ items, onMove, total}) => {
  return (
    <div>
      <h3>Product List</h3>
      <div className="list">
        {items.map((elm) => (
          <ProductItem key={elm.id} {...elm} onMove={onMove}/>
        ))}
        <h3>{total}</h3>
      </div>
    </div>
  );
};
