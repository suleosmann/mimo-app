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
  const { topDone, setTopDone } = useWalletStore();

  const images = [
    {
      image: TowersImg,
      logo: kplc,
      title: "Electricity",
      description: "Pay your electricity bills",
      billers: ["KPLC", "KenGen"],
    },
    {
      image: NairbiHq,
      logo: nssf,
      title: "Water",
      description: "Pay your water bills",
      billers: ["Nairobi Water", "Mombasa Water"],
    },
    {
      image: image3,
      logo: kra,
      title: "Internet",
      description: "Pay your internet bills",
      billers: ["Zuku", "Safaricom"],
    },
    {
      image: image1,
      logo: kplc,
      title: "Television",
      description: "Pay your TV subscription",
      billers: ["DSTV", "GoTV"],
    },
    {
      image: image2,
      logo: nssf,
      title: "Phone",
      description: "Pay your phone bills",
      billers: ["Airtel", "Safaricom"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageClicked, setIsImageClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(!isImageClicked);

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
    const handleWheel = (e) => {
      if (isImageClicked) {
        return; // Prevent scrolling when the image is in the small state
      }

      if (scrollDelayTimeout.current) {
        clearTimeout(scrollDelayTimeout.current);
      }

      scrollDelayTimeout.current = setTimeout(() => {
        if (e.deltaY < 0) {
          // Scroll up or left
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? imagesLength - 1 : prevIndex - 1
          );
        } else {
          // Scroll down or right
          setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesLength);
        }
      }, scrollDelay);
    };

    const containerElement = containerRef.current;
    containerElement.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      containerElement.removeEventListener("wheel", handleWheel);
      clearTimeout(scrollDelayTimeout.current);
    };
  }, [imagesLength, scrollDelay, isImageClicked]);

  const previousIndex =
    currentIndex === 0 ? imagesLength - 1 : currentIndex - 1;
  const nextIndex = (currentIndex + 1) % imagesLength;

  const previousImage = images[previousIndex];
  const currentImage = images[currentIndex];
  const nextImage = images[nextIndex];

  const handleCurrentImageClick = () => {
    setIsImageClicked((prev) => !prev);
  };

  const handleTopUpClick = () => {
    setTopDone(true);
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
            <h1 className="text-2xl">176,239.90</h1>
          </div>
          <button
            className="bg-custom-green rounded-lg text-white text-sm py-2 px-3"
            onClick={handleTopUpClick}
          >
            Top Up
          </button>
        </div>
      </div>
      <div ref={containerRef} className="z-30">
        <div className="relative h-[420px] w-[390px]">
          <div className="flex ml-6 absolute top-[30px] gap-[12px] z-20">
            {previousImage && (
              <div
                className={`h-[370px] w-[52px] pt-2.5 rounded-lg transition-opacity duration-500 ease-in-out ${
                  isImageClicked ? "opacity-0" : "opacity-100"
                }`}
                style={{ backgroundImage: `url(${previousImage.image})` }}
              />
            )}
            <div
              className={`relative w-[208px] rounded-lg cursor-pointer bg-cover bg-center`}
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
        <div className="absolute bg-custom-dark-green w-full h-[450px] top-[195px] z-10 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-20 mx-16">
            {currentImage.billers.map((biller, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg"
              >
                <h2 className="text-2xl font-bold  text-custom-green">
                  {currentImage.title}
                </h2>
                <p className="mb-4 text-custom-green">{currentImage.description}</p>
                <h3 className="text-xl font-semibold  text-custom-green">
                  Biller:
                </h3>
                <p className="text-custom-green">{biller}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
