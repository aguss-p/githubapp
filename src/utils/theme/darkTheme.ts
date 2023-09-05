import { createTheme, responsiveFontSizes } from '@mui/material';
import { indigo, red, cyan } from '@mui/material/colors';
import { CustomThemeOptions } from '../../types/theme/theme.types';

const theme = createTheme({
    palette: {
        text: {
            color: '#ffffff',
        },
        shadows: {
            default: indigo[800],
        },
        error: {
            main: red.A400,
        },
        primary: {
            main: 'rgb(187,134,252)',
        },
        action: {
            hover: 'rgba(187,134,252,0.6)',
        },
        secondary: {
            main: cyan[600],
        },
        common: {
            white: '#454545',
            black: '#F7F7F7',
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
