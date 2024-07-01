import React, { useEffect, useState } from "react";
import image1 from "../resources/img/1.png";
import TypingEffectComponent from "./DynamicText";

const Hero = () => {
  return (
    <div id="hero">
      <div className="w-full hero-container flex">
        <div className="frame flex bg-opacity-20">
          <div className="hero-left content-center">
            <div className=" intro-all-content w-1/2 mx-auto text-left">
              <h1 className="hi text-left text-red-600">Hi!</h1>
              <span className="intro">This is Abdul Qayyum</span>
              <span className="block text-2xl ">
                I am a <TypingEffectComponent />
                <span></span>
              </span>
            </div>
          </div>
          <div className="hero-right">
            <img src={image1} alt="one image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
