import { Theme, createTheme, ThemeOptions } from '@mui/material';

export interface CustomThemeOptions extends ThemeOptions {
    extra?: {
        [key: string]: any;
    };
}

declare module '@mui/material/styles' {
    interface ThemeOptions {
        extra?: {
            imageFilterValue?: number;
            // aquí puedes agregar otras propiedades personalizadas que necesites
        };
    }
}
