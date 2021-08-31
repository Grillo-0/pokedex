import { createTheme } from "@material-ui/core";

const theme = createTheme({
    palette: {
        primary: {
            main: '#F26157',
        },
        secondary: {
            main: '#39A2AE'
        }
    },
    shadows: ['none']
})

theme.overrides= {
    MuiTextField: {
        root: {
            margin: theme.spacing(5,0,0),
            width: '92%',
        }
    },
    MuiTabs: {
        root: {
        },
        indicator: {
            background: '#fff',
            height: '4px'
        }
    }
}
export default theme
