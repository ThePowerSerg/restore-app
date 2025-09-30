import { useEffect, useState } from "react"
import type { product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";

function App() {

 const [products, setProducts] = useState<product[]>([]);

 useEffect(() => {
  fetch('http://localhost:5294/api/products')
  .then(response => response.json())
  .then(data => setProducts(data))  
 },[])

  const addProduct = () => {
    setProducts (previousState => [...previousState, {
      id: previousState.length + 1
      ,name: 'product ' + (previousState.length)
      ,price: previousState.length * 100
      ,quantityInStock: 100
      ,description: 'test'
      ,pictureUrl: 'https://test.com'
      ,type:'test'
      ,brand:'test'
    }])
  }

  return (
    <>
        <h1 style={{color: 'magenta'}}>ReStore</h1>
        <Catalog products={products} addProduct={addProduct} />
    </>
  )
}

export default App
