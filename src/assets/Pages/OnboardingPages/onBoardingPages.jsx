import React, { useRef } from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import OnBoarding from '../../Components/onBoarding/onBoarding';
import './OnboardingPages.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { onBoardingPages } from '../../data/onBoardingData/onBoardingData';
import { btns } from '../../data/onBoardingData/btns';


const OnBoardingPage = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const skip = () => {
    navigate('/auth/login');
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
  };

  return (
    <div className="content">
      <div className="container">
        <Slider ref={sliderRef} {...settings}>
          {onBoardingPages.map((page) => (
            <div key={page.id}>
              <OnBoarding
                img={page.img}
                title={page.title}
                description={page.description}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="btnsDiv">
        {btns.map((btn, index) => (
          <button
            key={index}
            id={btn.id}
            className={btn.classN}
            onClick={btn.id === 'skipBtn' ? skip : next}
          >
            {btn.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OnBoardingPage;
