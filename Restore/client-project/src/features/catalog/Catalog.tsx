import type { Product } from "../../app/models/product"
import ProductList from "./ProductList";

interface ListProducts {
    productsList: Product[];
}

export default function Catalog({productsList}: ListProducts) {
    return (
        <>
            <ProductList productsforCards={productsList} />
        </>
    )
}