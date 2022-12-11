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
import { useQuery } from "react-query";
import { getBlock } from "../../../services/blocks-api-service.js";

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

const ServicesSlider = ({blockData}) => {
  const [imageSlider, setImageSlider] = useState(null);
  const [infoSlider, setInfoSlider] = useState(null);
  const isDesktop = useMediaQuery('(min-width:991px)');
  const isMobile = useMediaQuery('(max-width: 600px)');
  const [slides, setSlides] = useState([
    {
      alias: 'ozelenennya-teritorii',
      title: 'Озеленення',
      subtitle: 'території',
      image: 'img.jpg'
    },
    {
      alias: 'ozelenennya2-teritorii2',
      title: 'Озеленення2',
      subtitle: 'території2',
      image: 'img.jpg'
    },
    {
      alias: 'avtomatichni-polyv',
      title: 'Автоматичний',
      subtitle: 'полив',
      image: 'img.jpg'
    },
  ]);

  //const{data: blockData, isFetched} = useQuery('sliderId', () => getBlock(164))

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
        <InfoSlider slides={blockData?.data?.slides} imageSlider={imageSlider} setInfoSlider={setInfoSlider} />
        <div className='image-slider'>
          <Slider {...imageSliderSettings} ref={(imageSliderRef => setImageSlider(imageSliderRef))} >
            {blockData?.data?.slides?.map((s, index) => {
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