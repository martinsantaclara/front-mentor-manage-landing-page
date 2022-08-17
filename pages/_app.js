import React, { useState } from 'react';
import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../themes/themes';

function MyApp({ Component, pageProps }) {
    const [darkMode, setDarkmode] = useState(false);
    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <GlobalStyles />
            <Component {...pageProps} dark={darkMode} />
        </ThemeProvider>
    );
}
export default MyApp;
