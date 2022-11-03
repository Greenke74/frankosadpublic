import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from '@mui/material'

import PrimaryButton from '../../common/PrimaryButton.jsx';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const InfoSlider = ({ slides, imageSlider, setInfoSlider }) => {
	const [activeSlide, setActiveSlide] = useState(0);

	const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 400,
		pauseOnHover: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		scroll: true,
		draggable: false,
		asNavFor: imageSlider,
		fade: true,
		beforeChange: (oldSlide, newSlide) => {
			setActiveSlide(newSlide);
		}
	};

	const isDesktop = useMediaQuery('(min-width:991px)');
	const navigate = useNavigate();
	return (
		<div className='info-slider'>
			<div>
				<Slider
					ref={(infoSliderRef => setInfoSlider(infoSliderRef))}
					{...settings}
				>
					{slides.map((s, index) => (
						<div
							key={index}
							className='info-content'
							style={{
							}}
						>
							<h3
								style={{
									width: 'fit-content',
									fontSize: isDesktop ? '64px' : '32px',
								}}
							>
								{s.title}
							</h3>
							<span style={{
								fontSize: isDesktop ? '32px' : '16px', 
								lineHeight: isDesktop ? '15px' : '10px', 
								fontWeight: 400
							}}>{s.subtitle}</span>
						</div>
					))}
				</Slider>
				<PrimaryButton style={{
					zoom: isDesktop ? '1' : '0.8'
				}}
					onClick={() => navigate(`/services${slides[activeSlide].alias?`/${slides[activeSlide].alias}` : "" }`)}
				>Дізнатися більше
				</PrimaryButton>
			</div >
		</div >
	)
}

export default InfoSlider