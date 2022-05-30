import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#c5cae9',
      },
    },
  });

export default function Header() {

  return (
    <Box sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={darkTheme}>

      <AppBar position="static" color='primary'>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            >
            <MenuIcon />
          </IconButton> */}
      <h2> <span>Covid-19 Tracker</span></h2> 
        </Toolbar>
      </AppBar>
              </ThemeProvider>
    </Box>
  );
}