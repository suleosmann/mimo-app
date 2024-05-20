import React, { useState, useEffect, useRef } from "react";
import MiMoAccountBalance from "../../../assets/MiMoAccountBalance.png";
import TowersImg from "../../../assets/towers.jpeg";
import NairbiHq from "../../../assets/nairobi-hq.jpeg";
import image1 from "../../../assets/image_1.jpeg";
import image2 from "../../../assets/image_2.jpeg";
import image3 from "../../../assets/image_3.jpeg";

import kplc from "../../../assets/kplc.png";
import nssf from "../../../assets/nssf.png";
import kra from "../../../assets/kra.png";

import { useWalletStore } from "../../../stores/useWalletStore";



const Home = () => {

  const touchStart = useRef(null); // Define useRef here

  const images = [
    {
      name: "Home",
      image: TowersImg,
      logo: kplc,
      title: "KPLC",
      description: "Pay your electricity bills",
    },
    {
      name: "Dad's Pension",
      image: NairbiHq,
      logo: nssf,
      title: "NSSF",
      description: "Pay your Service Fund",
    },
    {
      name: "Business Taxes",
      image: image1,
      logo: kra,
      title: "Kra",
      description: "Pay Electricity",
    },
  ];
  

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageClicked, setIsImageClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(!isImageClicked);
  const [moneyClick, setMoneyClick] = useState(false);
  const [billerContainer, setBillerContainer] = useState(false);
  const [addBill, setAddBill] = useState(false)

  const handleMoneyClick = () => {
    setMoneyClick((prev) => !prev);
  };
  const handleBillClick = () => {
    setAddBill((prev) => !prev);
    setBillerContainer(false);

  };

  const handleBillerClick = () => {
    setBillerContainer((prev) => !prev);
    console.log("Clicked");
    setAddBill(false)
    
  };

  const imagesLength = images.length;
  const containerRef = useRef(null);
  const scrollDelayTimeout = useRef(null);
  const scrollDelay = 300;

  useEffect(() => {
    if (!isImageClicked) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isImageClicked]);

  useEffect(() => {
    const scrollThreshold = 60; // Adjust this threshold as needed
  
    const handleTouchStart = (e) => {
      touchStart.current = e.touches[0].clientX;
    };
  
    const handleTouchMove = (e) => {
      if (isImageClicked) {
        return; // Prevent scrolling when the image is in the small state
      }
  
      const touchEnd = e.touches[0].clientX;
      const diff = touchStart.current - touchEnd;
  
      if (Math.abs(diff) > scrollThreshold) {
        if (diff > 0) {
          // Swiped left
          setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesLength);
        } else {
          // Swiped right
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? imagesLength - 1 : prevIndex - 1
          );
        }
      }
    };
  
    const handleTouchEnd = () => {
      touchStart.current = null;
    };
  
    const containerElement = containerRef.current;
    containerElement.addEventListener("touchstart", handleTouchStart, { passive: true });
    containerElement.addEventListener("touchmove", handleTouchMove, { passive: true });
    containerElement.addEventListener("touchend", handleTouchEnd);
  
    return () => {
      containerElement.removeEventListener("touchstart", handleTouchStart);
      containerElement.removeEventListener("touchmove", handleTouchMove);
      containerElement.removeEventListener("touchend", handleTouchEnd);
    };
  }, [imagesLength, isImageClicked]);
  

  const previousIndex =
    currentIndex === 0 ? imagesLength - 1 : currentIndex - 1;
  const nextIndex = (currentIndex + 1) % imagesLength;

  const previousImage = images[previousIndex];
  const currentImage = images[currentIndex];
  const nextImage = images[nextIndex];

  const handleCurrentImageClick = () => {
    setIsImageClicked((prev) => !prev);
    setBillerContainer(false);
  };

  return (
    <div className="relative font-montserrat">
      <div className="text-center text-xl font-normal">
        <div className="flex justify-center items-center mb-4">
          <img src={MiMoAccountBalance} alt="Account Balance" />
        </div>
        <div className="flex justify-center items-center text-custom-green font-bold space-x-4">
          <div className="flex items-baseline space-x-1">
            <span className="text-xs">KES</span>
            <h1 className="text-2xl" onClick={handleMoneyClick}>
              176,239.90
            </h1>
          </div>
        </div>
        {moneyClick && (
          <div className="space-y-2 text-sm ml-24 w-[208px] h-[78px] bg-white rounded-lg">
            <div className="flex space-x-20 mx-1 pt-2">
              <h1 className="opacity-70">Cash back</h1>
              <h1 className="text-custom-green font-bold">345.89</h1>
            </div>
            <div className="flex">
              <h1 className="pr-14 opacity-70">Social Services Contribution</h1>
              <h1 className="mr-4 text-custom-green font-bold">00.00</h1>
            </div>
          </div>
        )}
      </div>
      <div ref={containerRef} className="z-30">
        <div className="relative h-[420px] w-[390px]">
          <div className="flex ml-6 absolute top-[50px] gap-[12px] ">
            {previousImage && (
              <div
                className={`h-[370px] w-[52px] pt-2.5 rounded-lg transition-opacity duration-500 ease-in-out ${
                  isImageClicked ? "opacity-0" : "opacity-100"
                }`}
                style={{ backgroundImage: `url(${previousImage.image})` }}
              />
            )}
            <div
              className={`relative w-[208px] rounded-lg cursor-pointer bg-cover bg-center z-20 bg-red-500`}
              style={{
                backgroundImage: `url(${currentImage.image})`,
                height: isImageClicked ? "150px" : "350px",
                transition: "height 0.5s ease",
              }}
              onClick={handleCurrentImageClick}
            >
              <div
                className={`absolute ${
                  isImageClicked
                    ? "left-4 top-20 transform -translate-y-1/2"
                    : "bottom-10 left-1/2 transform -translate-x-1/2"
                } w-16 h-16`}
              >
                <img
                  src={currentImage.logo}
                  alt="Logo"
                  className="w-full h-full"
                />
              </div>
              {!isImageClicked && (
                <div className="absolute inset-0 bg-white opacity-10 rounded-lg"></div>
              )}
            </div>
            {nextImage && (
              <div
                className={`h-[370px] w-[52px] pt-2.5 rounded-lg transition-opacity duration-500 ease-in-out ${
                  isImageClicked ? "opacity-0" : "opacity-100"
                }`}
                style={{ backgroundImage: `url(${nextImage.image})` }}
              />
            )}
          </div>
        </div>
      </div>
      {isImageClicked && (
        <div className="absolute bg-custom-dark-green w-full h-[369px] top-[195px] z-10 text-center">
          <h1 className="mt-20 mb-6 text-xs text-white font-bold">
            Tap on card to close
          </h1>
          <div className="flex justify-center space-x-4 mx-3">
            {!addBill && (<div>
            {billerContainer  ? (
              <div
                className="w-64  bg-gray-200 rounded-lg p-4 mr-4"
                onClick={handleBillerClick}
              >
                <h1 className="font-bold text-center">{currentImage.title}</h1>
                <h1 className="text-center mt-4">123456789</h1>
                <div className="mt-4 text-start text-sm">
                  <label className="mr-2 ml-1">Enter Amount</label>
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Enter Amount"
                      className="border rounded-lg p-2 w-full mr-2 bg-custom-dark-green"
                    />
                    <button className="bg-custom-green text-custom-dark-green font-bold rounded-lg p-2 px-4">
                      PAY
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="w-[140px] h-[97px] bg-white rounded-lg flex flex-col justify-center items-center"
                onClick={handleBillerClick}
              >
                <div className="space-y-2 mt-2 text-center">
                  <h1 className="font-bold text-custom-green">
                    {currentImage.name}
                  </h1>
                  <h1 className="text-gray-700">123456789</h1>
                </div>
              </div>
            )}
            </div>)}
            {!billerContainer &&(<div>
            {addBill ? (
              <div
                className="w-64   bg-gray-200 rounded-lg p-4 "
                onClick={handleBillClick}
              >
                <h1 className="font-bold text-center">{currentImage.title}</h1>
                <div className="mt-4 text-start text-sm">
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Enter Name"
                      className="border rounded-lg p-2 w-full mr-2 bg-custom-dark-green"
                    />
                    <input
                      type="text"
                      placeholder="Enter Account Number"
                      className="border rounded-lg p-2 w-full mr-2 bg-custom-dark-green"
                    />
                    <button className="bg-custom-green w-full text-custom-dark-green font-bold rounded-lg p-2 px-4">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="w-[140px] h-[97px] bg-white rounded-lg flex flex-col justify-center items-center"
                onClick={handleBillClick}
              >
                <div className="space-y-2 mt-2 text-center">
                  <h1 className="font-bold text-custom-green text-bold text-lg">
                    + ADD 
                  </h1>
                </div>
              </div>
            )}
            </div>)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
