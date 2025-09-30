import type { product } from "../../app/models/product"

type Props = {
    products: product[];
    addProduct: () => void;
}

export default function Catalog({products, addProduct}: Props) {
    return (
        <>
            <div>Big Serg</div>
            <ul>
                {
                   products.map(item => (
                   <li key={item.id}>{item.name} - {item.price}</li>
                  ))
                }
            </ul>
            <button onClick={addProduct}>Submit</button>
        </>
    )
}