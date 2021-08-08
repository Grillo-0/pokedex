import '../styles/globals.css'
import { ThemeProvider } from '@material-ui/styles'
import theme from "../styles/theme"

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}