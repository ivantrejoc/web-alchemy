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
import laptopCoding from "/img/icons8-laptop-coding-96.png";
import mobileApplication from "/img/icons8-iphone-14-96.png";
import wordpressSite from "/img/icons8-wordpress-96.png";
import uxDesign from "/img/icons8-pen-96.png";
import CountUp from "react-countup";
import ServiceCard from "../components/serviceCard/ServiceCard";
import ClientCard from "../components/clientCard/clientCard";
import WorksSlider from "../components/worksSlider/WorksSlider";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const theme = useTheme();
  const sectionRefs = useRef([]);
  const backgroundRefs = useRef([]);
  const serviceRef = useRef(null);
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

    gsap.fromTo(
      serviceRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: serviceRef.current,
          start: "top center",
          end: "bottom top",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const { ref: countUpRef, inView } = useInView({
    triggerOnce: true,
    threshold: 1
  });

  const services = [
    {
      id: 1,
      icon: laptopCoding,
      title: "Web Development",
      description:
        "Developing web based industrial applications using front-end and back-end technologies.",
      link: "/services#web-dev"
    },
    {
      id: 2,
      icon: mobileApplication,
      title: "Mobile Applications",
      description:
        "We craft native mobile apps to iOS and Android devices with clean, robust and scalable structure.",
      link: "/services#web-dev"
    },
    {
      id: 3,
      icon: wordpressSite,
      title: "WordPress Sites",
      description:
        "We create beautiful, high-performing and highly-customizable WordPress sites that drive traffic and grow your business.",
      link: "/services#web-dev"
    },
    {
      id: 4,
      icon: uxDesign,
      title: "UX/UI Design",
      description:
        "Creating designs that are both functional and enjoyable putting user experience first.",
      link: "/services#web-dev"
    }
  ];
  const clients = [
    {
      id: 1,
      name: "E-commerce",
      link: "https://wanderlust-phi.vercel.app",
      imgSrc:
        "https://i.postimg.cc/d0kJj9Hy/wanderlust-name-removebg-preview.png",
      alt: "E-commerce",
      background: "rgba(255, 255, 255, 0.85)"
    },
    {
      id: 2,
      name: "Proyecto web agricola",
      link: "https://agroseedservicios.com",
      imgSrc: "https://i.postimg.cc/qvZkKFLr/agrosed-name-removebg-preview.png",
      alt: "Proyecto web agricola",
      background: "#16a34a"
    },
    {
      id: 3,
      name: "Desarrollo web indumentaria",
      link: "https://crossing-borders.netlify.app/",
      imgSrc:
        "https://i.postimg.cc/Lsc2CZw0/Crossing-borders-removebg-preview.png",
      alt: "Desarrollo web indumentaria",
      background: "rgba(255, 255, 255, 0.85)"
    },
    {
      id: 4,
      name: "Desarrollo de software",
      link: "https://www.hieloyelito.com/",
      imgSrc: "https://i.postimg.cc/K8YGRbtQ/Yelito-name-removebg-preview.png",
      alt: "Desarrollo de software",
      background: "rgba(255, 255, 255, 0.85)"
    },
    {
      id: 5,
      name: "catálogo web",
      link: "https://www.stop.com.ar/",
      imgSrc: "https://i.postimg.cc/gJ3df2Pc/stop-name-removebg-preview.png",
      alt: "catálogo web",
      background: "#dc2626"
    }
  ];

  return (
    <Box className="main-body" variant="mainBody">
      <Box
        ref={(el) => (sectionRefs.current[0] = el)}
        className="main-hero-section"
        sx={{
          width: "100%",
          height: "100vh",
          maxHeight: "100vh",
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
        className="about-us-section"
        sx={{
          width: "100%",
          height: "100vh",
          maxHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          paddingX: 10,
          paddingTop: 0,
          [theme.breakpoints.down("md")]: {
            justifyContent: "center",
            alignItems: "center",
            paddingX: 0,
            paddingTop: 10,
            height: "105vh",
            maxHeight: "105vh"
          },
          [theme.breakpoints.down("sm")]: {
            paddingX: 1,
            paddingTop: 0,
            height: "130vh",
            maxHeight: "130vh"
          },
          [theme.breakpoints.down("xs")]: {
            justifyContent: "center",
            alignItems: "flex-start",
            paddingX: 0,
            paddingTop: 20
          },
          [theme.breakpoints.down("xxs")]: {
            paddingX: 0,
            paddingTop: 0,
            height: "160vh",
            maxHeight: "160vh"
          }
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
            zIndex: -1,
            backgroundImage:
              "url('/img/vecteezy_cyber-network-protection-future-technology-background_.jpg')",
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
              backdropFilter: "blur(2px)"
            }
          }}
        ></Box>
        <Box
          className="content"
          sx={{
            width: "100%",
            height: "100%",
            maxHeight: "100%",
            display: "flex",
            left: 0,
            top: 0,

            alignItems: "center",
            justifyContent: "center",
            paddingTop: 15,
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
              paddingTop: 5
            },
            [theme.breakpoints.down("xxs")]: {
              paddingTop: 20
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
                  background: "rgba(255, 255, 255, 0.85)",
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
      <Box
        ref={(el) => (sectionRefs.current[2] = el)}
        className="services-section"
        sx={{
          width: "100%",
          height: "100vh",
          maxHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          paddingX: 10,
          paddingTop: 0,
          [theme.breakpoints.down("md")]: {
            paddingX: 0,
            paddingTop: 0
          },
          [theme.breakpoints.down("sm")]: {
            height: "190vh",
            maxHeight: "190vh"
          },
          [theme.breakpoints.down("xxs")]: {
            height: "250vh",
            maxHeight: "250vh"
          }
        }}
      >
        <Box
          ref={(el) => (backgroundRefs.current[2] = el)}
          className="bg"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            maxHeight: "100%",
            overflow: "hidden",
            zIndex: -1
          }}
        ></Box>
        <Box
          className="content"
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flex: 1,
            left: 0,
            top: 0,
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            zIndex: 1,
            [theme.breakpoints.down("md")]: {
              paddingX: 2,
              paddingTop: 20
            },
            [theme.breakpoints.down("sm")]: {
              paddingTop: 0
            },
            [theme.breakpoints.down("xs")]: {
              paddingTop: 15
            },
            [theme.breakpoints.down("xxs")]: {
              paddingTop: 5
            }
          }}
        >
          <Box
            ref={serviceRef}
            className="services-container"
            sx={{
              width: "100%",
              height: "70%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: 5,
              padding: 0,
              [theme.breakpoints.down("md")]: {
                height: "90%"
              }
            }}
          >
            <Typography
              variant="h3"
              sx={{
                textAlign: "start"
              }}
            >
              Our Services
            </Typography>
            {!isMobile && (
              <Box
                className="services-area"
                sx={{
                  display: "flex",
                  width: "100%",
                  height: "70%",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                {services?.map((service) => (
                  <ServiceCard key={service.id} {...service} />
                ))}
              </Box>
            )}

            {isMobile && (
              <Box
                className="services-area"
                sx={{
                  display: "flex",
                  width: "100%",
                  height: "90%",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Box
                  ref={serviceRef}
                  className="services-container"
                  container
                  sx={{
                    height: "100%",
                    width: "100%",
                    display: "grid",
                    gridTemplateRows: "repeat(2, 1fr)",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: 2,
                    [theme.breakpoints.down("sm")]: {
                      display: "flex",
                      flexDirection: "column"
                    }
                  }}
                >
                  {services?.map((service) => (
                    <Box
                      key={service.id}
                      sx={{
                        width: "100%",
                        height: "100%",
                        [theme.breakpoints.down("sm")]: {
                          height: "25%"
                        }
                      }}
                    >
                      <ServiceCard key={service.id} {...service} />
                    </Box>
                  ))}
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      <Box
        ref={(el) => (sectionRefs.current[3] = el)}
        className="clients-section"
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          paddingX: 10,
          paddingTop: 0,
          [theme.breakpoints.down("md")]: {
            height: "130vh",
            paddingTop: 25
          }
        }}
      >
        <Box
          ref={(el) => (backgroundRefs.current[3] = el)}
          className="bg"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            backgroundImage:
              "url('/img/vecteezy_cyber-network-protection-future-technology-background_.jpg')",
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
              backdropFilter: "blur(2px)"
            }
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
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 15,
            gap: 1,
            zIndex: 1,
            [theme.breakpoints.down("md")]: {
              paddinTop: 20
            }
          }}
        >
          <Box className="section-container">
            <Box sx={{ textAlign: "left", marginBottom: 4 }}>
              <Typography variant="h3">Clients who trust us</Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: 2,
                [theme.breakpoints.down("md")]: {
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gridTemplateRows: "repeat(3, 1fr)"
                }
              }}
            >
              {clients.map((client) => (
                <ClientCard
                  key={client.id}
                  image={client.imgSrc}
                  alt={client.alt}
                  background={client.background}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        ref={(el) => (sectionRefs.current[4] = el)}
        className="works-section"
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          paddingX: 10,
          paddingTop: 20
        }}
      >
        <Box
          ref={(el) => (backgroundRefs.current[4] = el)}
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
            height: "90%",
            display: "flex",
            left: 0,
            top: 0,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 5,
            zIndex: 1
          }}
        >
          <Box
            className="title-container"
            sx={{
              width: "100%"
            }}
          >
            <Typography variant="h2">Our Works</Typography>
          </Box>
          <Box
            className="carousel-container"
            sx={{
              // background: "red",
              width: "100%",
              height: "60%",
              display: "flex",
              alignItems: "center"
            }}
          >
            <WorksSlider />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Home;
