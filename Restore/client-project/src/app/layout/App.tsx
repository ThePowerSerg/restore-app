import { useState } from "react"
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

// getst the initial state of the darkmode from local storage
const getInitialDarkMode = () => {
  const storedDarkMode = localStorage.getItem('darkMode');
  return storedDarkMode ? JSON.parse(storedDarkMode) : true
}

function App() {

  //define the state
  const [darkMode, setDarkMode] = useState(getInitialDarkMode());
  //set the state
  const toggleDarkMode = () => {
    localStorage.setItem('darkMode', JSON.stringify(!darkMode))
    setDarkMode(!darkMode)
  }

  const palleteType = darkMode ? 'dark' : 'light'

  const darkModeTheme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: (palleteType === 'light') ? '#eaeaea' : '#121212'
      }
    }
  })

  return (
    <ThemeProvider theme={darkModeTheme}>
      <CssBaseline/>
      <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Box sx={{
          minHeight:'100vh',
          background: darkMode ? '#121212' : '#eaeaea'
      }}>
        <Container maxWidth='xl' sx={{ mt: 14 }}>
          <Outlet/>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
