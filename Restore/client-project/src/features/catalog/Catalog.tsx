//import { useEffect, useState } from "react";
//import type { Product } from "../../app/models/product"
import { useFetchProductsQuery } from "./CatalogApi";
import ProductList from "./ProductList";

export default function Catalog() {

    const {data, isLoading} = useFetchProductsQuery();

    if (isLoading || !data) return <div>Loading...</div>

    // Original design
    // const [products, setProducts] = useState<Product[]>([]);
    
    // useEffect(() => {
    //     fetch('http://localhost:5294/api/products')
    //       .then(response => response.json())
    //       .then(data => setProducts(data))
    //   }, [])

    return (
        <>
            <ProductList productsforCards={data} />
        </>
    )
}