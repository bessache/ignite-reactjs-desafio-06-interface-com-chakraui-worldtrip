import {extendTheme} from '@chakra-ui/react'


export const theme = extendTheme({

    colors: {
        dark: {
            "900": "#000000",
            "600": "#47585B",
            "300": "#999999",
        },
        highlight: {
            "900": "#FFBA08",
            "600": "#F6C851"
        },
        light: {
            "300": "#DADADA",
            "200": "#F5F8FA",
            "50": "#ffffff",
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    },
    styles: {
        global: {
            body: {
                bg: 'light.200',
                color: 'dark.600'
            }
        }
    }
})