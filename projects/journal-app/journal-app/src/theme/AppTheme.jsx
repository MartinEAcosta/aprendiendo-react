import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './purpleTheme';

export const AppTheme = ( { children } ) => {
    return (
    <ThemeProvider theme={ theme }>
        <CssBaseline />

        {children}

      </ThemeProvider>
    )
}
