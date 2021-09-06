import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

let ThemeContext = createTheme({
  palette: { mode: "dark", background: { paper: "#424242" } },
  typography: { h1: { fontSize: "3rem" }, h2: { fontSize: "2rem" } },
});

ThemeContext = responsiveFontSizes(ThemeContext);

export default ThemeContext;
