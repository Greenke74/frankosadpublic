import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import InfoSlider from "./InfoSlider.jsx";
import { IconButton } from "@mui/material";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.scss'

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

const ServicesSlider = ({ onLoadEnd }) => {
  const [imageSlider, setImageSlider] = useState(null);
  const [infoSlider, setInfoSlider] = useState(null);
  const isDesktop = useMediaQuery('(min-width:991px)');
  const isMobile = useMediaQuery('(max-width: 600px)');
  const [slides, setSlides] = useState([
    {
      alias: 'ozelenennya-teritorii',
      title: 'Озеленення',
      subtitle: 'території',
      image: 'https://fdbjwhrarqlmsshfbotn.supabase.co/storage/v1/object/public/main-page-images/mainPageInfo1.jpg?t=2022-10-31T22%3A27%3A52.445Z'
    },
    {
      alias: 'ozelenennya2-teritorii2',
      title: 'Озеленення2',
      subtitle: 'території2',
      image: 'rulon.png'
    },
    {
      alias: 'avtomatichni-polyv',
      title: 'Автоматичний',
      subtitle: 'полив',
      image: 'img.jpg'
    },
  ]);

  useEffect(() => {
    onLoadEnd();
  }, [])

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
        <InfoSlider slides={slides} imageSlider={imageSlider} setInfoSlider={setInfoSlider} />
        <div className='image-slider'>
          <Slider {...imageSliderSettings} ref={(imageSliderRef => setImageSlider(imageSliderRef))} >
            {slides.map((s, index) => {
              return (
                <div
                  key={index}
                ><div
                    className='image-slide'
                    style={{
                      backgroundImage: `url(${s.image})`,
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