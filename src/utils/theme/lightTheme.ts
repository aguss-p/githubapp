import { createTheme, responsiveFontSizes } from '@mui/material';
import { red, orange, deepOrange } from '@mui/material/colors';
import { error } from 'console';
import { CustomThemeOptions } from '../../types/theme/theme.types';

const theme = createTheme({
    palette: {
        text: {
            color: '#121212',
        },
        background: {
            default: deepOrange[800],
        },
        error: {
            main: red.A400,
        },
        action: {
            hover: 'rgba(35, 90, 100,0.6)',
        },
        primary: {
            main: 'rgb(35, 90, 100)',
        },
        secondary: {
            main: orange[600],
        },
        common: {
            white: 'rgb(216, 225, 226)',
            black: '#000000',
        },
    },
    typography: {
        fontFamily: [
            '"Montserrat"',
            '-apple-system, system-ui',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
        ].join(','),
    },
} as CustomThemeOptions);

export default responsiveFontSizes(theme);
