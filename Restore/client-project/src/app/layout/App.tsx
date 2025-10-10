import { useEffect, useState } from "react"
import type { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";

function App() {

  const [products, setProducts] = useState<Product[]>([]);

  const darkModeToggle = false;
  const palleteType = darkModeToggle ? 'dark' : 'light'

  const darkModeTheme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: (palleteType === 'light') ? '#eaeaea' : '#121212'
      }
    }
  })

  useEffect(() => {
    fetch('http://localhost:5294/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <ThemeProvider theme={darkModeTheme}>
      <CssBaseline/>
      <NavBar />
      <Box sx={{
          minHeight:'100vh',
          background: darkModeToggle ? '#121212' : '#eaeaea'
      }}>
        <Container maxWidth='xl' sx={{ mt: 14 }}>
          <Catalog productsList={products} />
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
