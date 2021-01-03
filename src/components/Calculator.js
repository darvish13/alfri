import { createMuiTheme, StylesProvider } from "@material-ui/core"
import { ThemeProvider } from "styled-components"
import Colorimetric from "./colorimetric/Colorimetric"

const theme = createMuiTheme({
  palette: {
    common: { black: '#000', white: '#fff' },
    background: { paper: '#fff', default: '#fafafa' },
    primary: {
      light: '#74c7ff',
      main: '#38afff',
      dark: '#22608a',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff3e63',
      main: '#ff1744',
      dark: '#ca1336',
      contrastText: '#fff',
    },
  },
})

const Calculator = () => (
  <StylesProvider injectFirst>
    <ThemeProvider theme={theme}>
      <Colorimetric />
    </ThemeProvider>
  </StylesProvider>
)

export default Calculator
