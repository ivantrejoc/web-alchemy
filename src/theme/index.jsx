import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0D1F66",
      light: "#00A6ED",
      dark: "#0D3B66"
    },
    background: {
      default: "#050E3B",
      paper: "#050E3B"
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
      fontWeight: "600",
      "@media (max-width: 600px)": {
        fontSize: "2rem",
      },
     "@media (min-width: 600px) and (max-width: 900x)": {
        fontSize: "3rem",
      },
    },
    h2: {
      color: "#FFFFFF",
      fontFamily: "Poppins",
      fontSize: "3.125rem",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "normal",
      letterSpacing: "0.15625rem"
    },
    h3: {
      color: "#FFFFFF",
      fontFamily: "Poppins",
      fontSize: "2.25rem",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "normal",
      letterSpacing: "0.125rem"
    },
    h4: {
      color: "#FFFFFF",
      fontFamily: "Poppins",
      fontSize: "2.1875rem",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "normal",
      letterSpacing: "0.10938rem"
    },
    text: {
      color: "#FFFFFF",
      fontFamily: "Poppins",
      fontSize: "1.1875rem",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal",
      letterSpacing: "0.09375rem",
      "@media (max-width: 600px)": {
        fontSize: "0.875rem",
      },
     "@media (min-width: 600px) and (max-width: 900x)": {
        fontSize: "3rem",
      },
    },
    navLinks: {
      color: "#FFFFFF",
      fontFamily: "Poppins",
      fontSize: "1.25rem",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "normal",
      letterSpacing: "0.0625rem",
      textDecoration: "none"
    }
  },
  components: {
    MuiBox: {
      styleOverrides: {
        mainBody: {
          width: "100%",
          overflowX: "hidden",
          position: "relative",
          background: "#050E3B"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#00A6ED",
          color: "#FFFFFF",
          borderRadius: "0.625rem",
          boxShadow: "0px 0px 12.439px 0px rgba(0, 0, 0, 0.25)",
          fontFamily: "Poppins",
          fontSize: "1.25rem",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "normal",
          letterSpacing: "0.10938rem",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#0D1F66"
          }
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
          fontFamily: "Poppins",
          fontSize: "1.25rem",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "normal",
          letterSpacing: "0.0625rem",
          textDecoration: "none"
        }
      }
    }
  },
  breakpoints: {
    values: {
      xxs: 321,
      xs: 376,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 2000
    }
  }
});

export default darkTheme;
