import { createTheme} from '@mui/material/styles';

const thme = createTheme({
    palette: {
        primary: {
            main: '#2D5A27', // verde oscuro
        },
        secundary: {
            main: '#C1F24B', // verde banano
        },
        background: {
            default: '#f5f5f5', // blanco
        },
    },
    typography: {
        fontFamily: '"Poppins", "Open Sans", sans-serif',
    },
});

export default createTheme;