import { useRef, useLayoutEffect } from "react";
import { Box, Link, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const theme = useTheme();
  const sectionRefs = useRef([]);
  const backgroundRefs = useRef([]);

  const getRatio = (element) =>
    window.innerHeight / (window.innerHeight + element.offsetHeight);

  useLayoutEffect(() => {
    sectionRefs.current.forEach((section, i) => {
      const bg = backgroundRefs.current[i];

      gsap.fromTo(
        bg,
        {
          backgroundPosition: () =>
            i === 0
              ? "50% 0px"
              : `50% ${-window.innerHeight * getRatio(section)}px`
        },
        {
          backgroundPosition: () =>
            `50% ${window.innerHeight * (1 - getRatio(section))}px`,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: i === 0 ? "top top" : "top bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true
          }
        }
      );
    });
  }, []);

  return (
    <Box className="main-body" variant="mainBody">
      <Box
        ref={(el) => (sectionRefs.current[0] = el)}
        clasName="section"
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          position: "relative",
          paddingLeft: 10,
          paddingTop: 15,
          [theme.breakpoints.down("md")]: {
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 0,
            paddingTop: 0
          },
          [theme.breakpoints.down("sm")]: {
            paddingX: 1,
            paddingTop: 10
          },
          [theme.breakpoints.down("xs")]: {
            justifyContent: "center",
            alignItems: "flex-start",
            paddingX: 0
          }
        }}
      >
        <Box
          ref={(el) => (backgroundRefs.current[0] = el)}
          clasName="bg"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            backgroundImage: "url('/img/code-1076536_1920.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
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
        ></Box>
        <Box
          className="content"
          sx={{
            display: "flex",
            padding: 0,
            flexDirection: "column",
            width: "50%",
            zIndex: 1,
            boxSizing: "border-box",
            [theme.breakpoints.down("md")]: {
              width: "80%"
            },
            [theme.breakpoints.down("sm")]: {
              width: "90%"
            }
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
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
            Get started
          </Link>
        </Box>
      </Box>
      <Box
        ref={(el) => (sectionRefs.current[1] = el)}
        clasName="section"
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative"
        }}
      >
        <Box
          ref={(el) => (backgroundRefs.current[1] = el)}
          clasName="bg"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            backgroundColor: "plum"
          }}
        ></Box>
        <Box
          clasName="content"
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            left: 0,
            top: 0,
            paddingX: 10,
            paddingTop: 15,
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1
          }}
        >
          <Box
            className="about-hero-container"
            sx={{
              backgroundColor: "orange",
              display: "flex",
              padding: 0,
              flexDirection: "column",
              width: "40%",
              boxSizing: "border-box",
              [theme.breakpoints.down("md")]: {
                width: "80%"
              },
              [theme.breakpoints.down("sm")]: {
                width: "100%"
              }
            }}
          >
            <Typography variant="h3">ABOUT OUR COMPANY</Typography>
            <Typography variant="h2">
              We are committed to providing our clients with exceptional
              services.
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
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
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
              Get started
            </Link>
          </Box>
          <Box
            className="images-container"
            sx={{
              backgroundColor: "cyan",
              width: "60%",
              height: "100%"
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Home;
