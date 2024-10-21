import { Box, Button, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLocation } from "react-router-dom";

const Header = () => {
  const theme = useTheme();
  const location = useLocation();

  return (
    <Box
      className="header-container"
      sx={{
        width: "100%",
        height: "15vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        position: "fixed",
        zIndex: "999"
      }}
    >
      <Paper
        className="header"
        elevation={4}
        sx={{
          width: "98%",
          height: "85%",
          display: "flex",
          justifyContent: "space-between",
          paddingX: 5,
          gap: 10,
          alignItems: "center",
          flexShrink: "0",
          background: "rgba(153, 153, 153, 0.30)",
          backdrodfilter: "blur(7.5px)",
          borderRadius: "25px"
        }}
      >
        <Box
          className="logo-container"
          sx={{
            width: "15%",
            height: "100%",
            padding: 0,
            boxSizing: "border-box"
          }}
        >
          <img
            src="/img/web-alchemy-horizontal-white-logo.png"
            alt="web-alchemy-logo"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box
          className="nav-links-container"
          sx={{
            width: "40%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Typography
            variant="navLinks"
            component="a"
            href="/"
            sx={{
              color:
                location.pathname === "/"
                  ? theme.palette.primary.light
                  : "inherit",
              "&:hover": {
                color: theme.palette.primary.light
              },
              "&:active": {
                color: theme.palette.primary.light
              }
            }}
          >
            Home
          </Typography>
          <Typography
            variant="navLinks"
            component="a"
            href="/about"
            sx={{
              color:
                location.pathname === "/about"
                  ? theme.palette.primary.light
                  : "inherit",
              "&:hover": {
                color: theme.palette.primary.light
              },
              "&:active": {
                color: theme.palette.primary.light
              }
            }}
          >
            About
          </Typography>
          <Typography
            variant="navLinks"
            component="a"
            href="/services"
            sx={{
              color:
                location.pathname === "/services"
                  ? theme.palette.primary.light
                  : "inherit",
              "&:hover": {
                color: theme.palette.primary.light
              },
              "&:active": {
                color: theme.palette.primary.light
              }
            }}
          >
            Services
          </Typography>
          <Typography
            variant="navLinks"
            component="a"
            href="/technologies"
            sx={{
              color:
                location.pathname === "/technologies"
                  ? theme.palette.primary.light
                  : "inherit",
              "&:hover": {
                color: theme.palette.primary.light
              },
              "&:active": {
                color: theme.palette.primary.light
              }
            }}
          >
            Technologies
          </Typography>
          <Typography
            variant="navLinks"
            component="a"
            href="/contact"
            sx={{
              color:
                location.pathname === "/contact"
                  ? theme.palette.primary.light
                  : "inherit",
              "&:hover": {
                color: theme.palette.primary.light
              },
              "&:active": {
                color: theme.palette.primary.light
              }
            }}
          >
            Contact
          </Typography>
        </Box>
        <Box
          className="cta-button-container"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Button>Contact us</Button>
        </Box>
      </Paper>
    </Box>
  );
};
export default Header;
