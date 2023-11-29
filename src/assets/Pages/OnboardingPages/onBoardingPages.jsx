import OnBoarding from '../../Components/onBoarding/onBoarding';
import Slider from "react-slick";
import './OnboardingPages.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {onBoardingPages} from '../../data/onBoardingData/onBoardingData';
import { btns } from '../../data/onBoardingData/btns';

const OnBoardingPage = () =>{

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return <button onClick={onClick} className='next'></button>;
  };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        // nextArrow: <CustomNextArrow />,
      };

  
      return (
        <div className="content">
        <div className="container">
          <Slider {...settings}>
            {
              
              onBoardingPages.map((page) => (
                    <div  key={page.id}>
                    <OnBoarding
                     img = {page.img}
                     title={page.title}
                     description = {page.description}
                   />
                   </div>
                  ))
            }  
          </Slider>
            </div>
          <div className="btnsDiv"> 
     
            {
                
                btns.map((btn ,index) =>
                
                ( <button key = {index} id = {btn.id}className={btn.classN}>{btn.text}</button>)
                
                )
            }
       </div>
      </div>
      );
    };
    
    export default OnBoardingPage;