import { useEffect, useState } from "react";
import { useParams } from "react-router"
import type { Product } from "../../app/models/product";

export default function ProductDetails() {

const {id} = useParams();
const [products, setProducts] = useState<Product | null>(null);

useEffect(() => {
  fetch(`http://localhost:5294/api/products/${id}`)
  .then(response => response.json())
  .then(data => setProducts(data))
  .catch(error => console.log(error))
},[id])

  return (
    <div style={{color: 'red'}}>{products?.name}</div>
  )
}
