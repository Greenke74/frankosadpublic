import React, { useState } from "react";
import { useMediaQuery } from '@mui/material';
import Slider from "react-slick";
import InfoSlider from "./InfoSlider.jsx";
import { IconButton } from "@mui/material";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.scss'
import { getImageSrc } from "../../../services/settingApiService.js";

const PrevArrow = ({ onClick }) => (
  <IconButton
    disableRipple={true}
    onClick={onClick}
    className='slider-arrow left-arrow'
  >
    <ArrowBackIcon />
  </IconButton>
)

const NextArrow = ({ onClick }) => (
  <IconButton
    disableRipple={true}
    onClick={onClick}
    className='slider-arrow right-arrow'
  >
    <ArrowForwardIcon />
  </IconButton>
)

const ServicesSlider = ({ blockData }) => {
  const [imageSlider, setImageSlider] = useState(null);
  const [infoSlider, setInfoSlider] = useState(null);
  const isDesktop = useMediaQuery('(min-width:991px)');
  const isMobile = useMediaQuery('(max-width: 600px)');

  const imageSliderSettings = {
    asNavFor: infoSlider,
    dots: false,
    slidesToShow: 1,
    arrows: !isMobile,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  return (
    <div className="services-slider-root">
      <div className="services-slider-wrapper">
        <InfoSlider slides={blockData?.services} imageSlider={imageSlider} setInfoSlider={setInfoSlider} />
        <div className='image-slider'>
          <Slider {...imageSliderSettings} ref={(imageSliderRef => setImageSlider(imageSliderRef))} >
            {blockData?.services?.map((s, index) => {
              return (
                <div
                  key={index}
                ><div
                    className='image-slide'
                    style={{
                      backgroundImage: `url(${getImageSrc(s.image)})`,
                      maxHeight: isDesktop ? '700px' : '400px',
                      backgroundPositionX: 'center',
                      backgroundSize: 'cover'
                    }}
                  />
                </div>
              )
            })}
          </Slider>
        </div>
      </div >
    </div >
  )
}

export default ServicesSlider;