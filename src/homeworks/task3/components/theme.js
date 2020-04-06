import { grey, red } from "@material-ui/core/colors";

const Theme = {
    DARK: 'dark',
    LIGHT: 'light'
}

const appThemeOptions = {
    [Theme.LIGHT]: {
        palette: {
            type: 'light',
            primary: {
                light: red[200],
                main: '#000',
                dark: red[600]
            },
            secondary: {
                light: red[200],
                main: red[400],
                dark: red[600]
            },
        },
    },
    [Theme.DARK]: {
        palette: {
            type: 'dark',
            primary: {
                light: grey[200],
                main: grey[400],
                dark: grey[600]
            },
            secondary: {
                light: grey[200],
                main: grey[400],
                dark: grey[600]
            },
        },
    }
};

export default appThemeOptions;
