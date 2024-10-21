import { Box, Link, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box className="main-body" variant="mainBody">
      <Box
        className="main-hero"
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          position: "relative",
          paddingLeft: 10,
          paddingBottom: 20,
          backgroundImage: "url('/img/code-1076536_1920.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(13, 31, 102, 0.65)",
            backdropFilter: "blur(4px)"
          }
        }}
      >
        <Box
          className="main-hero-content"
          sx={{
            display: "flex",
            padding: 0,
            flexDirection: "column",
            width: "50%",
            height: "55%",
            zIndex: 1,
            boxSizing: "border-box"
          }}
        >
          <Typography variant="h1">
            Crafting software, one spell at time
          </Typography>
          <Typography
            variant="text"
            sx={{
              marginY: 5
            }}
          >
            We specialize in creating beautiful and responsive websites and
            mobile applications. Each line of code is carefully crafted and
            designed to produce the desired effect with precision and
            efficiency.
          </Typography>
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
            Get started
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
export default Home;
