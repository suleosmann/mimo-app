import React, { useState } from "react";
import MiMoAccountBalance from "../../../assets/MiMoAccountBalance.png";
import TowersImg from "../../../assets/towers.jpeg";
import KenyaPowersLogo from "../../../assets/kplc.png";
import NairbiHq from "../../../assets/nairobi-hq.jpeg";

const Home = () => {
  const [click, setClicked] = useState(false);

  const handleOnClick = () => {
    setClicked((prevClicked) => !prevClicked);
  };

  return (
    <div className="font-montserrat">
      <div>
        <div className="text-center text-xl font-normal mt-6">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={MiMoAccountBalance} alt="" />
          </div>

          <div className="text-custom-green flex text-center justify-center font-bold mt-1">
            <span className="text-xs mr-1 mt-1">KES</span>
            <h1 className=" ">176,239.90</h1>
          </div>
        </div>
        <div className="relative h-[420px] w-[390px] " onClick={handleOnClick}>
          {!click && (
            <div className="flex ml-6 absolute top-[30px] left-[76px]  gap-[12px]">
              <div
                style={{ backgroundImage: `url(${TowersImg})` }}
                className="flex justify-center relative w-[208px] h-[350px] gap-2.5 rounded-lg bg-cover"
              >
                <div className="flex justify-center absolute bottom-0 w-[208px] h-[192px]">
                  <img
                    src={KenyaPowersLogo}
                    alt="kenya power logo "
                    className=" absolute bottom-2 "
                  />
                </div>
              </div>
              <div className=" h-[370px] w-[52px] pt-2.5 ">
                <div
                  style={{ backgroundImage: `url(${NairbiHq})` }}
                  className="h-[350px] w-[52px] rounded-lg bg-cover bg-top-right"
                ></div>
              </div>
            </div>
          )}

          {click && (
            <div className="relative w-[390px] h-[420px]  mt-40 border-b-2 bg-custom-dark-green border-custom-dark-green ">
              <div
                style={{ backgroundImage: `url(${TowersImg})` }}
                className="absolute -top-[100px] right-24 w-[208px] h-[134px] rounded-xl bg-cover bg-center"
              >
                <div className=" absolute bottom-6 left-4 w-[60px] h-[62.5px]">
                  <img
                    src={KenyaPowersLogo}
                    alt="kenya power logo "
                    className=" absolute bottom-2 "
                  />
                </div>
              </div>
              <div className="flex flex-col text-center justify-center ">
                <h1 className="mt-10 text-xs text-white font-semibold">
                  Tap on card to close
                </h1>
                <div className="space-x-2 flex w-[390px] h-[117px]  mt-8 pl-6">
                  <div className="w-[110px] h-[97px] bg-white rounded-lg space-y-10 text-sm">
                    <h1 className="mt-2 font-bold">Text Here</h1>
                    <h1>Text Here</h1>
                  </div>
                  <div className="w-[110px] h-[97px] bg-white rounded-lg space-y-10 text-sm">
                    <h1 className="mt-2 font-bold">Text Here</h1>
                    <h1>Text Here</h1>
                  </div>
                  <div className="w-[110px] h-[97px] bg-white rounded-lg space-y-10 text-sm">
                    <h1 className="mt-2 font-bold">Text Here</h1>
                    <h1>Text Here</h1>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
