import React from "react";
import './OnBoarding.css'


function OnBoarding({img , title , description , btns}) {
    console.log(btns);
    return (
      <>
      <div>
       <img className= "onBoardingImgs" src= {img} alt= "onBoarding img"/>
       <div className="contentBoarding">
       <h2 className="title">{title}</h2>
       <p className="description">{description}</p>
       </div>
       </div>
    
      
      </>
    );
  }
  
  export default OnBoarding;
  