import { createTheme } from "@mui/material";


const theme = createTheme({
    palette: {
      primary: {
        main: 'rgba(255, 255, 255, 1)',  // Reemplaza con el color principal del Figma
        white:'rgba(255, 255, 255, 1)'
      },
      secondary: {
        main: '#dc004e',  // Reemplaza con el color secundario del Figma
      },
    },
    typography: {
      fontFamily: 'DM Sans, Roboto, Arial, sans-serif',  
      h1: {
        fontSize: '2rem',
      },
      h2: {
        fontSize: '1.5rem',
      },
    },
  });
  
  export default theme;



