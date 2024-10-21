import { Box, Button, Menu, MenuItem, Fade, Link } from "@mui/material";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

const DropdownMenu = () => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="dropdown-container">
      <Button
        sx={{
          border: "none !important",
          borderRadius: "none !important",
          background: "none !important",
          width: "2.5rem !important",
          height: "2.5rem !important"
        }}
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img
          className="burger-icon"
          src="/img/icons8-menu-48.svg"
          alt="burger-menu"
        />
      </Button>
      <Menu
        id="fade-menu"
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "rgba(153, 153, 153, 0.30)",
            backdropFilter: "blur(7.5px)",
            borderRadius: "25px"
          }
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>
          <Link
            variant="navLinks"
            sx={{
              "&:hover": {
                color: theme.palette.primary.light
              },
              "&:active": {
                color: theme.palette.primary.light
              }
            }}
            href="/"
          >
            Home
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            variant="navLinks"
            sx={{
              "&:hover": {
                color: theme.palette.primary.light
              },
              "&:active": {
                color: theme.palette.primary.light
              }
            }}
            href="/about"
          >
            About
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            variant="navLinks"
            sx={{
              "&:hover": {
                color: theme.palette.primary.light
              },
              "&:active": {
                color: theme.palette.primary.light
              }
            }}
            href="/services"
          >
            Services
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            variant="navLinks"
            sx={{
              "&:hover": {
                color: theme.palette.primary.light
              },
              "&:active": {
                color: theme.palette.primary.light
              }
            }}
            href="/technologies"
          >
            Technologies
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            variant="navLinks"
            sx={{
              "&:hover": {
                color: theme.palette.primary.light
              },
              "&:active": {
                color: theme.palette.primary.light
              }
            }}
            href="/contact"
          >
            Contact
          </Link>
        </MenuItem>
      </Menu>
    </Box>
  );
};
export default DropdownMenu;
