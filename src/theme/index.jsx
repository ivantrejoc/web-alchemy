import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0D1F66",
      light: "#00A6ED",
      dark: "0D3B66"
    },
    background: {
      default: "#04104D",
      paper: "04104D"
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#F5F7FA"
    }
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"],
    fontSize: 16,
    h1: {
      fontFamily: "Poppins",
      color: "#FFFFFF",
      fontSize: "4rem",
      fontStyle: "normal",
      lineHeight: "normal",
      fontWeight: "600"
    },
    h2: {
      color: "#FFFFFF",
      fontFamily: "Poppins",
      fontSize: "3.125rem",
      fontStyle: "normal",
      fontWeight: "600",
      linHeight: "normal",
      letterSpacing: "0.15625rem"
    },
    h3: {
      color: "#FFFFFF",
      fontFamily: "Poppins",
      fontSize: "2.5rem",
      fontStyle: "normal",
      fontWeight: "600",
      linHeight: "normal",
      letterSpacing: "0.125rem"
    },
    h4: {
      color: "#FFFFFF",
      fontFamily: "Poppins",
      fontSize: "2.1875rem",
      fontStyle: "normal",
      fontWeight: "500",
      linHeight: "normal",
      letterSpacing: "0.10938rem"
    },
    text: {
      color: "#FFFFFF",
      fontFamily: "Poppins",
      fontSize: "1.1875rem",
      fontStyle: "normal",
      fontWeight: "400",
      linHeight: "normal",
      letterSpacing: "0.09375rem"
    },
    navLinks: {
      color: "#FFFFFF",
      fontFamily: "Poppins",
      fontSize: "1.25rem",
      fontStyle: "normal",
      fontWeight: "500",
      linHeight: "normal",
      letterSpacing: "0.0625rem"
    }
  },
  components: {
    MuiBox: {
      body: {
        style: {
          width: "100%",
          overflowX: "hidden",
          position: "relative"
        }
      }
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 2000
    }
  }
});

export default darkTheme;