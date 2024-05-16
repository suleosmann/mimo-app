import React, { useState, useEffect } from "react";
import Splash from "./onBoarding/Splash";
import WelcomeSlide from "./onBoarding/WelcomeSlide";
import Registration from "./auth/Auth";

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [showWelcomeSlide, setShowWelcomeSlide] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);

  useEffect(() => {
    // Show splash for 3 seconds
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
      setShowWelcomeSlide(true);
    }, 3000);

    return () => clearTimeout(splashTimer);
  }, []);

  useEffect(() => {
    if (showWelcomeSlide) {
      // Automatically show registration after 3 slides
      const slideTimer = setTimeout(() => {
        setShowWelcomeSlide(false);
        setShowRegistration(true);
      }, 7300);

      return () => clearTimeout(slideTimer);
    }
  }, [showWelcomeSlide]);

  return (
    <div>
      {showSplash && <Splash />}
      {showWelcomeSlide && <WelcomeSlide />}
      {showRegistration && <Registration />}
    </div>
  );
};

export default Home;
