import { createTheme } from "@material-ui/core";

const theme = createTheme({
    palette: {
        primary: {
            main: '#F26157',
        },
        secondary: {
            main: '#39A2AE'
        }
    }
})

theme.overrides= {
    MuiTextField: {
        root: {
            margin: theme.spacing(5,0,0),
            width: '90%',
        }
    }
}
export default theme
