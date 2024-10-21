import { Box, Link, Paper, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import DropdownMenu from "../dropdownMenu/DropdownMenu";

const Header = () => {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
      {!isMobile &&(
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
          <Link
           className="linkButton"
            sx={{
              width: "10.625rem",
              height: "3.125rem",
              padding: 1,
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
              textDecoration: "none",
              textAlign: "center",
              "&:hover": {
                backgroundColor: "#0D1F66"
              }
            }}
          >
            Contact us
          </Link>
        </Box>
      </Paper>
      )}
      {isMobile &&(
        <Paper
        className="header"
        elevation={4}
        sx={{
          width: "98%",
          height: "85%",
          display: "flex",
          justifyContent: "space-between",
          paddingX: 5,
          gap: 15,
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
            width: "80%",
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
          <DropdownMenu/>
        </Box>
       
      </Paper>
        
      )}
    </Box>
  );
};
export default Header;
