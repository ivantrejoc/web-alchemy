import { Box, Typography, Link, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ServiceCard = ({ icon, title, description, link }) => {
    const theme = useTheme();   
  return (
    <Box
      className="service-card"
      sx={{
        width: "20%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-evenly",
        paddingX: "1.5rem",
        flexShrink: 0,
        borderRadius: "2.5rem",
        background: "#FFFFFF",
        border: `3px solid ${theme.palette.primary.light}`,
        boxShadow: "0px 0px 17.585px 11.43px rgba(249, 249, 249, 0.30);",
        boxSizing: "border-box"
      }}
    >
      <Box
        className="icon-container"
        sx={{
          height: "3rem",
          width: "3rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          objectFit: "cover",
          padding: 0
        }}
      >
        <img className="service-icon" src={icon} alt="html-coding" />
      </Box>
      <Box
        className="title-container"
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "stretch",
          width: "100%",
          height: "20%",
          maxHeight: "40%"
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: theme.palette.primary.dark,
            fontSize: "1.75rem"
          }}
        >
          {title}
        </Typography>
      </Box>

      <Box
        className="desc-container"
        sx={{
          width: "100%",
          height: "40%",
          maxHeight: "40%"
        }}
      >
        <Typography
          variant="text"
          sx={{
            color: theme.palette.primary.dark
          }}
        >
         {description}
        </Typography>
      </Box>
      <Link
        className="linkButton"
        href={link}
        sx={{
          width: "8.625rem",
          height: "3rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#00A6ED",
          color: "#FFFFFF",
          borderRadius: "0.625rem",
          boxShadow: "0px 0px 12.439px 0px rgba(0, 0, 0, 0.25)",
          fontFamily: "Poppins",
          fontSize: "0.85rem",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "normal",
          letterSpacing: "0.10938rem",
          textTransform: "none",
          textDecoration: "none",
          "&:hover": {
            backgroundColor: "#0D1F66"
          },
          [theme.breakpoints.down("sm")]: {
            width: "8.625rem",
            height: "2.125rem",
            fontSize: "1rem"
          }
        }}
      >
        Read More
        <ChevronRightIcon />
      </Link>
    </Box>
  );
};
export default ServiceCard;
