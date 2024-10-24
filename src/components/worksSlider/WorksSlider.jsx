import { Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WorksSlider = () => {
    const settings = {
        className: "center",
        centerMode: true,        
        dots: false,
        infinite: true,
        autoplay: true,        
        autoplaySpeed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              centerPadding: "40px",
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 834,
            settings: {
              className: "center",
              centerMode: true,
              centerPadding: "20px", 
              slidesToShow: 2, 
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              className: "center",
              centerMode: true,
              centerPadding: "3rem",
              slidesToShow: 1,
              slidesToScroll: 3
            }
          },
         
        ]
      };

  return (
    <Box className="slider-container">
      <Slider {...settings}>
        <Box className="slide">
          <img
            src="https://res.cloudinary.com/dxsosgojl/image/upload/v1697486015/PortfolioWebWizard/Desing-removebg-preview_xz6mxj.png"
            alt="desarrollo web"
          />
        </Box>
        <Box className="slide">
          <img
            src="https://res.cloudinary.com/dxsosgojl/image/upload/v1697485934/PortfolioWebWizard/Moda-removebg-preview_zfuqpn.png"
            alt="desarrollo web"
          />
        </Box >
        <Box className="slide">
          <img
            src="https://res.cloudinary.com/dxsosgojl/image/upload/v1697485932/PortfolioWebWizard/Sport-removebg-preview_kf9azl.png"
            alt="desarrollo web"
          />
        </Box>
        <Box className="slide">
          <img
            src="https://res.cloudinary.com/dxsosgojl/image/upload/v1697485933/PortfolioWebWizard/Dash_2-removebg-preview_x6bz0r.png"
            alt="desarrollo web"
          />
        </Box>
        <Box className="slide">
          <img
            src="https://res.cloudinary.com/dxsosgojl/image/upload/v1697485929/PortfolioWebWizard/Resto-removebg-preview_i3lbpc.png"
            alt="desarrollo web"
          />
        </Box>        
      </Slider>
    </Box>
  );
};
export default WorksSlider;
