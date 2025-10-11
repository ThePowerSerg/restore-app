import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

type Props = {
   toggleDarkMode: () => void;
   darkMode: boolean;
}

export default function NavBar({toggleDarkMode, darkMode}: Props) {

  return (
     <AppBar position="fixed">
        <Toolbar>
            <Typography variant="h6">RESTORE</Typography>
            <IconButton onClick={toggleDarkMode}>
               {darkMode ? <LightMode sx={{color:'white'}}/> : <DarkMode sx={{color:'white'}} /> }
            </IconButton>
        </Toolbar>
     </AppBar>
  )
}
