import { useEffect, useState } from "react"
import type { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import { Box, Button, Container, Typography } from "@mui/material";

function App() {

 const [products, setProducts] = useState<Product[]>([]);

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
    <Container maxWidth='xl'>
      <Box display='flex' justifyContent= 'center' gap={3} marginY={3}>
        <Typography variant='h4'>ReStore</Typography>
        <Button variant='contained' onClick={addProduct}>Submit</Button>
      </Box>
      <Catalog productsList={products} />
    </Container>
  )
}

export default App
