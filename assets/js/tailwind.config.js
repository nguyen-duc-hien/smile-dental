tailwind.config = {
    theme: {
        extend: {
            screens: {
                '3xl': '1784px',
                '2xl': '1280px',
                xl: '1024px',
                lg: '992px',
                md: '768px',
                sm: '525px',
                DEFAULT: '1784px',
            },
            container: {
                center: true,
                maxWidth: '1920px',
                padding: {
                    DEFAULT: '24px',
                    '3xl': '24px',
                    '2xl': '32px',
                    xl: '32px',
                    lg: '24px',
                    md: '24px',
                    sm: '24px',
                },
            },
        },
        colors: {
            white: '#FFF',
            black: '#000',
            primary: {
                DEFAULT: "#EFC441",
                '2': '#CF9626',
            },
            secondary: {
                DEFAULT: "#25303F",
            },
            desc: {
                DEFAULT: '#25303F',
            },
            mono: {
                dark: {
                    90: '#151515',
                    80: '#333333',
                },
                gray: {
                    70: "#494949",
                    60: "#666666",
                    50: "#808080",
                    40: "#999999",
                    30: "#BBBBBB",
                    20: "#DDDDDD",
                    10: "#EEEEEE",
                    1: "#f9fafb",
                },
            },
        }
    }
}