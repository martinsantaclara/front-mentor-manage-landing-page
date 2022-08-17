import { createGlobalStyle } from 'styled-components';

const shared = {
    // Temp fonts
    ffPrimary: 'Be Vietnam Pro, sans-serif',
    // Colors for layout
    primary: 'hsl(12 88% 59%)',
    primaryOpacity: 'hsl(12 88% 59% / .5)',
    primaryLight: 'hsl(13 100% 96%)',
    primaryHover: 'hsl(12 91% 72%)',
    onPrimary1: 'hsl(0 0% 100%)',
    onPrimary2: 'hsl(9 54% 97%)',
    secondary: 'hsl(228 13% 13%)',
    onSecondary1: 'hsl(0 0% 100%)',
    onSecondary2: 'hsl(0 0% 100% / 0.5)',
    onPlaceholder: 'hsl(0 0% 55%)',
    onError: 'hsl(0 88% 59%)',
    shadow1: 'hsl(9 100% 78%)',
    shadow2: 'hsl(9 68% 56%)',
    // font sizes
    fs200: '0.625',
    fs300: '0.8125',
    fs400: '0.875',
    fs500: '0.9375',
    fs600: '1',
    fs700: '1.875',
    fs800: '2',
    fs900: '2.5',
    fs950: '3.5',
    // font weight
    fwThin: '100',
    fwUltraLight: '200',
    fwLight: '300',
    fwRegular: '400',
    fwMedium: '500',
    fwSemiBold: '600',
    fwBold: '700',
    fwUltraBold: '800',
    fwBlack: '900',
    // Breakpoints for responsive design
    breakpoints: {
        sm: 'screen and (min-width: 640px)',
        md: 'screen and (min-width: 768px)',
        lg: 'screen and (min-width: 1024px)',
        xl: 'screen and (min-width: 1280px)',
        xxl: 'screen and (min-width: 1441px)',
    },
};

const utility = {
    // fonts
    ffBody: shared.ffPrimary,
    ffHeading: shared.ffPrimary,
    // btns
    btnBg: shared.primary,
    btnClr: shared.onPrimary2,
    btnShadow: shared.shadow1,
    btnHoverBg: shared.primaryHover,
    btnHoverClr: shared.onPrimary2,
    btnHoverShadow: shared.shadow1,
    // btns inverted
    btnInvertedBg: shared.onPrimary1,
    btnInvertedClr: shared.primary,
    btnInvertedShadow: shared.shadow2,
    btnInvertedHoverBg: shared.onPrimary1,
    btnInvertedHoverClr: shared.primaryOpacity,
    btnInvertedHoverShadow: shared.shadow2,
    // input
    onInputActive: shared.onError,
    onSecondaryHover: shared.primary,
    // font sizes headings
    fsHeading_sm: shared.fs700,
    fsHeading_md: shared.fs800,
    fsHeading_lg: shared.fs900,
    fsHeading_xl: shared.fs950,
    // font weight Heading
    fwHeading_sm: shared.fwUltraBold,
    fwHeading_md: shared.fwUltraBold,
    fwHeading_lg: shared.fwBold,
    fwHeading_xl: shared.fwBold,
    // font sizes Text
    fsText_xxs: shared.fs200,
    fsText_xs: shared.fs300,
    fsText_s: shared.fs400,
    fsText_md: shared.fs500,
    fsText_lg: shared.fs600,
};

const light = {
    background: 'hsl(0 0% 100%)',
    surface: 'hsl(0 0% 98%)',
    onBackground: 'hsl(228 38% 23%)',
    onBackgroundOpacity: 'hsl(228 38% 23% / .5)',
    clrHeading: 'hsl(228 38% 23%)',
    clrLogo: 'hsl(228 38% 23%)',
};

const dark = {
    background: 'hsl(0 0% 7%)',
    surface: 'hsl(0 4% 31%)',
    onBackground: 'hsl(0 0% 100%)',
    onBackgroundOpacity: 'hsl(0 0% 100% / .5)',
    clrHeading: 'hsl(0 0% 100%)',
    clrLogo: 'hsl(0 0% 100%)',
};

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html,
    body {
        padding: 0;
        margin: 0;
        font-family: ${({ theme }) => theme.ffBody};
        font-size: 1rem;
        overflow-x: hidden;
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.onBackground};
    }

    h1,
    h2,
    h3,
    p {
        margin: 0;
        padding: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;

export const lightTheme = { ...shared, ...utility, ...light };
export const darkTheme = { ...shared, ...utility, ...dark };
