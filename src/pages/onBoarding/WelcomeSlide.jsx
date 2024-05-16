import React, { useState, useEffect } from 'react';
import SlideImage1 from '../../assets/image_1.jpeg';
import SlideImage2 from '../../assets/image_2.jpeg';
import SlideImage3 from '../../assets/image_3.jpeg';

const images = [SlideImage1, SlideImage2, SlideImage3];
const totalTimePerImage = 5; // Total time to display each image in seconds

const WelcomeSlide = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progressBars, setProgressBars] = useState([0, 0, 0]);

  useEffect(() => {
    const intervals = images.map((_, index) =>
      setInterval(() => {
        setProgressBars((prevBars) =>
          prevBars.map((prev, idx) =>
            idx === index ? prev + (100 / totalTimePerImage) : prev
          )
        );
      }, 500)
    );

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []);

  useEffect(() => {
    const timeouts = images.map((_, index) =>
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setProgressBars([0, 0, 0]);
      }, totalTimePerImage * 500 * (index + 1))
    );

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [currentImageIndex]);

  const skipSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    setProgressBars([0, 0, 0]);
  };

  return (
    <div className="h-screen relative">
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'absolute',
            zIndex: index === currentImageIndex ? 10 : 1,
            opacity: index === currentImageIndex ? 1 : 0,
          }}
        >
          {index === currentImageIndex && (
            <div className="absolute top-0 left-0 w-full h-full bg-custom-green opacity-40"></div>
          )}
          <div className="px-2 flex mt-8 space-x-2 w-full rounded-full h-2.5">
            {progressBars.map((progress, idx) => (
              <div
                key={idx}
                className="h-[4px] rounded-full"
                style={{
                  width: `${100 / images.length}%`,
                  background: `linear-gradient(to right, ${
                    idx === currentImageIndex ? 'rgb(77, 191, 163)' : 'rgb(75, 100, 95)'
                  } ${progress}%, rgb(75, 100, 95) ${progress}%)`,
                }}
              ></div>
            ))}
          </div>
          {index === currentImageIndex && (
            <div className="absolute bottom-32 p-8 text-white font-montserrat">
              {index === 0 && (
                <div  className=''>
                  <h1 className="text-2xl font-bold mb-4">Hello!</h1>
                  <p className="text-4xl font-normal">
                    Welcome to MIMO, your all-in-one financial wallet!
                  </p>
                </div>
              )}
              {index === 1 && (
                <div>
                  <h1 className="text-4xl font-bold mb-4">Explore powerful features</h1>
                  <p className="text-lg">
                    to manage your money with ease.
                  </p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>Quick and secure transactions</li>
                    <li>Budget tracking</li>
                    <li>Bill payments</li>
                  </ul>
                </div>
              )}
              {index === 2 && (
                <div>
                  <h1 className="text-3xl font-bold mb-4 w-80">Ready to take control of your finances? Get started today!</h1>
                  
                    
                  
                </div>
              )}
            </div>
          )}
          {index === currentImageIndex && (
            <button
              onClick={skipSlide}
              className="absolute top-16 -right-6 font-semi-bold font-poppins transform -translate-x-1/2 px-4 py-2 text-white rounded-md"
            >
              Skip
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default WelcomeSlide;