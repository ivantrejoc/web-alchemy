import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import darkTheme from "./theme";
import Header from "./components/header/Header";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
