import React, { useState, useEffect } from "react";
import Splash from "./onBoarding/Splash";
import WelcomeSlide from "./onBoarding/WelcomeSlide";
import Registration from "./auth/Auth";

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [showWelcomeSlide, setShowWelcomeSlide] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const [skip, setSkip] = useState(false)


  useEffect(() => {
    // Show splash for 3 seconds
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
      setShowWelcomeSlide(true);
    }, 1500);

    return () => clearTimeout(splashTimer);
  }, []);
  
  const handleSkipClick =() => {
    setSkip(true)
  }
  

  useEffect(() => {
    if (skip) {
      setShowWelcomeSlide(false);
      setShowRegistration(true);
    } else if (showWelcomeSlide) {
      // Total time for each slide to display (5 seconds) + Transition time (1 second)
      const slideTimer = setTimeout(() => {
        setShowWelcomeSlide(false);
        setShowRegistration(true);
      }, 7000);
  
      return () => clearTimeout(slideTimer);
    }
  }, [showWelcomeSlide, skip]);
  

  

  return (
    <div>
      {showSplash && <Splash />}
      {showWelcomeSlide && <WelcomeSlide handleSkipClick = {handleSkipClick} />}
      {showRegistration && <Registration />}
    </div>
  );
};

export default Home;
