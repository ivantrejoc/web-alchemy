import { useRef, useLayoutEffect } from "react";
import { Box, Link, Typography, Paper, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView } from "react-intersection-observer";
import ImagesStripe from "../components/imagesStripe/ImagesStripe";
import ivanPhoto from "/img/profile-light-blue.jpg";
import paulPhoto from "/img/paul-martinez-profile-2.jpg";
import danielaPhoto from "/img/daniela-profile.jpg";
import developmentPhoto from "/img/website-8305451_1280.jpg";
import CountUp from "react-countup";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const theme = useTheme();
  const sectionRefs = useRef([]);
  const backgroundRefs = useRef([]);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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

  const { ref: countUpRef, inView } = useInView({
    triggerOnce: true,
    threshold: 1
  });

  return (
    <Box className="main-body" variant="mainBody">
      <Box
        ref={(el) => (sectionRefs.current[0] = el)}
        className="section"
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
            paddingX: 0,
            paddingTop: 20
          },
          [theme.breakpoints.down("xxs")]: {
            paddingX: 0,
            paddingTop: 10
          }
        }}
      >
        <Box
          ref={(el) => (backgroundRefs.current[0] = el)}
          className="bg"
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
        className="section"
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
          className="bg"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1
          }}
        ></Box>
        <Box
          className="content"
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            left: 0,
            top: 0,
            paddingX: 10,
            paddingTop: 20,
            alignItems: "flex-start",
            justifyContent: "center",
            gap: 1,
            zIndex: 1,
            [theme.breakpoints.down("md")]: {
              flexDirection: "column",
              paddingX: 2,
              alignItems: "center",
              justifyContent: "space-evenly",
              gap: 10
            },
            [theme.breakpoints.down("sm")]: {
              paddingX: 2,
              paddingTop: 18,
              justifyContent: "center",
              gap: 2
            },
            [theme.breakpoints.down("xs")]: {
              paddingX: 1,
              paddingTop: 15
            }
          }}
        >
          <Box
            className="left-side-container"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 0,
              zIndex: 0,
              width: "55%",
              height: "90%",
              boxSizing: "border-box",
              [theme.breakpoints.down("md")]: {
                width: "100%",
                height: "fit-content",
                justifyContent: "center",
                gap: 5
              },
              [theme.breakpoints.down("sm")]: {
                justifyContent: "center",
                height: "70%",
                gap: 1
              },
              [theme.breakpoints.down("xs")]: {
                height: "75%",
                gap: 1
              }
            }}
          >
            <Box
              className="about-hero-container"
              sx={{
                display: "flex",
                padding: 0,
                flexDirection: "column",
                width: "100%",
                [theme.breakpoints.down("sm")]: {
                  height: "70%"
                }
              }}
            >
              <Typography variant="h3">ABOUT OUR COMPANY</Typography>
              <Typography variant="h2">Why choose us?</Typography>
              <Typography
                variant="text"
                sx={{
                  marginY: 5
                }}
              >
                Our team of experts specializes in creating top-notch,
                responsive MVPs. Backed by 10+ years of industry experience, we
                deliver clean code, elegant design, and a user experience that
                sets new standards.
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
                Know more
              </Link>
            </Box>
            <Box
              className="counters-container"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: 0,
                width: "100%",
                height: "10rem",
                [theme.breakpoints.down("md")]: {
                  height: "7rem"
                },
                [theme.breakpoints.down("sm")]: {
                  height: "20%"
                }
              }}
            >
              <Paper
                className="counters"
                elevation={4}
                sx={{
                  width: "90%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: "0",
                  padding: 1,
                  background: "rgba(255, 255, 255, 0.90)",
                  backdrodfilter: "blur(7.5px)",
                  borderRadius: "25px",
                  [theme.breakpoints.down("md")]: {
                    width: "100%"
                  },
                  [theme.breakpoints.down("sm")]: {
                    borderRadius: "15px",
                    padding: 0.5
                  }
                }}
              >
                <Box
                  className="counter"
                  sx={{
                    width: "33.33%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Box ref={countUpRef}>
                    {inView && (
                      <CountUp
                        className="count-up-counter"
                        start={0}
                        end={10}
                        prefix="+"
                        duration={2.75}
                      />
                    )}
                  </Box>
                  <Typography
                    variant="text"
                    sx={{
                      color: theme.palette.primary.dark,
                      fontWeight: "500",
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "0.525rem"
                      },
                      [theme.breakpoints.down("xs")]: {
                        fontSize: "0.475rem"
                      }
                    }}
                  >
                    Years of Experience
                  </Typography>
                </Box>
                <Box
                  className="counter"
                  sx={{
                    width: "33.33%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Box ref={countUpRef}>
                    {inView && (
                      <CountUp
                        className="count-up-counter"
                        start={0}
                        end={100}
                        prefix="+"
                        duration={2.75}
                      />
                    )}
                  </Box>
                  <Typography
                    variant="text"
                    sx={{
                      color: theme.palette.primary.dark,
                      fontWeight: "500",
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "0.525rem"
                      },
                      [theme.breakpoints.down("xs")]: {
                        fontSize: "0.475rem"
                      }
                    }}
                  >
                    Satisfied Clients
                  </Typography>
                </Box>
                <Box
                  className="counter"
                  sx={{
                    width: "33.33%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Box ref={countUpRef}>
                    {inView && (
                      <CountUp
                        className="count-up-counter"
                        start={0}
                        end={60}
                        prefix="+"
                        duration={2.75}
                      />
                    )}
                  </Box>
                  <Typography
                    variant="text"
                    sx={{
                      color: theme.palette.primary.dark,
                      fontWeight: "500",
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "0.525rem"
                      },
                      [theme.breakpoints.down("xs")]: {
                        fontSize: "0.475rem"
                      }
                    }}
                  >
                    Completed Projects
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Box>
          {!isMobile && (
            <Box
              className="grid-container"
              sx={{
                width: "60%",
                height: "90%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 5,
                boxSizing: "border-box"
              }}
            >
              <Box
                className="images-container"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                  height: "100%"
                }}
              >
                <Box
                  className="grid-photo"
                  sx={{
                    display: "flex",
                    height: "40%",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Box
                    className="circle-photo"
                    sx={{
                      height: "16.25rem",
                      width: "16.25rem",
                      borderRadius: "50%",
                      background: `url(${danielaPhoto}) lightgray 50% / cover no-repeat`,
                      backgroundPosition: "center 20%",
                      boxShadow:
                        "0px 0px 17.585px 11.43px rgba(249, 249, 249, 0.30)",
                      boxSizing: "border-box"
                    }}
                  ></Box>
                </Box>
                <Box
                  className="grid-photo"
                  sx={{
                    flexShrink: 0,
                    height: "60%",
                    borderRadius: "0rem 0rem 0rem 10.49575rem",
                    background: `url(${paulPhoto}) lightgray 50% / cover`,
                    backgroundPosition: "top right",
                    boxShadow:
                      "0px 0px 17.585px 11.43px rgba(249, 249, 249, 0.30);",
                    boxSizing: "border-box"
                  }}
                ></Box>
              </Box>
              <Box
                className="images-container"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                  height: "100%",
                  boxSizing: "border-box"
                }}
              >
                <Box
                  className="grid-photo"
                  sx={{
                    flexShrink: 0,
                    height: "60%",
                    borderRadius: "0rem 3.49575rem 0rem 0rem",
                    background: `url(${ivanPhoto}) lightgray 50% / cover no-repeat`,
                    backgroundPosition: "top",
                    boxShadow:
                      "0px 0px 17.585px 11.43px rgba(249, 249, 249, 0.30);",
                    boxSizing: "border-box"
                  }}
                ></Box>
                <Box
                  className="grid-photo"
                  sx={{
                    flexShrink: 0,
                    height: "40%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Box
                    className="circle-photo"
                    sx={{
                      height: "16.25rem",
                      width: "16.25rem",
                      borderRadius: "50%",
                      background: `url(${developmentPhoto}) lightgray 50% / cover no-repeat`,
                      boxShadow:
                        "0px 0px 17.585px 11.43px rgba(249, 249, 249, 0.30)",
                      boxSizing: "border-box"
                    }}
                  ></Box>
                </Box>
              </Box>
            </Box>
          )}

          {isMobile && <ImagesStripe />}
        </Box>
      </Box>
    </Box>
  );
};
export default Home;
