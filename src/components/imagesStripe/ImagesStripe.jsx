import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ivanPhoto from "/img/profile-light-blue.jpg";
import paulPhoto from "/img/paul-martinez-profile-2.jpg";
import danielaPhoto from "/img/daniela-profile.jpg";

const ImagesStripe = () => {
  const theme = useTheme();

  return (
    <Box
      className="images-container"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        height: "20%",
        boxSizing: "border-box",
        [theme.breakpoints.down("md")]: {
          height: "25%"
        }
      }}
    >
      <Box
        className="circle-photo"
        sx={{
          height: "12.25rem",
          width: "12.25rem",
          borderRadius: "50%",
          background: `url(${ivanPhoto}) lightgray 50% / cover no-repeat`,
          backgroundPosition: "center 20%",
          boxShadow: "0px 0px 17.585px 11.43px rgba(249, 249, 249, 0.30)",
          boxSizing: "border-box",
          [theme.breakpoints.down("md")]: {
            height: "11.25rem",
            width: "11.25rem"
          },
          [theme.breakpoints.down("sm")]: {
            height: "7.5rem",
            width: "7.5rem"
          },
          [theme.breakpoints.down("xs")]: {
            height: "6.25rem",
            width: "6.25rem"
          }
        }}
      ></Box>
      <Box
        className="circle-photo"
        sx={{
          height: "12.25rem",
          width: "12.25rem",
          borderRadius: "50%",
          background: `url(${paulPhoto}) lightgray 50% / cover no-repeat`,
          backgroundPosition: "left",
          boxShadow: "0px 0px 17.585px 11.43px rgba(249, 249, 249, 0.30)",
          boxSizing: "border-box",
          [theme.breakpoints.down("md")]: {
            height: "11.25rem",
            width: "11.25rem"
          },
          [theme.breakpoints.down("sm")]: {
            height: "7.5rem",
            width: "7.5rem"
          },
          [theme.breakpoints.down("xs")]: {
            height: "6.25rem",
            width: "6.25rem"
          }
        }}
      ></Box>
      <Box
        className="circle-photo"
        sx={{
          height: "12.25rem",
          width: "12.25rem",
          borderRadius: "50%",
          background: `url(${danielaPhoto}) lightgray 50% / cover no-repeat`,
          backgroundPosition: "center 20%",
          boxShadow: "0px 0px 17.585px 11.43px rgba(249, 249, 249, 0.30)",
          boxSizing: "border-box",
          [theme.breakpoints.down("md")]: {
            height: "11.25rem",
            width: "11.25rem"
          },
          [theme.breakpoints.down("sm")]: {
            height: "7.5rem",
            width: "7.5rem"
          },
          [theme.breakpoints.down("xs")]: {
            height: "6.25rem",
            width: "6.25rem"
          }
        }}
      ></Box>
    </Box>
  );
};
export default ImagesStripe;
