import React, { useState } from "react";
import Mpesa from "../../../../assets/mpesa.png";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import CashbackRewards from './CashbackRewards';


const TopUp = () => {
  const types = ["M-pesa", "Cash", "PesaLink", "RTGS"];
  const [selectedType, setSelectedType] = useState("M-pesa");
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList(!showList);
  };

  const handleButtonClick = (type) => {
    setSelectedType(type);
  };

  return (
    <>
      <div className="bg-red flex flex-wrap justify-between items-center px-6">
        {types.map((type, index) => (
          <button
            key={index}
            className="bg-custom-green text-white rounded-lg px-5 py-1 text-sm"
            onClick={() => handleButtonClick(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <div >
      <div className="ml-5">
        {selectedType === "PesaLink" && (
          <div className="w-[370px] mx-5 h-[500px] mt-8" id="PesaLink">
            <ol className="list-decimal pr-8">
              <li>Select PesaLink on your Bank's menu</li>
              <li>Select "Send To Account" on the PesaLink menu options</li>
              <li>Enter your Beneficiary Account as 1115510000348</li>
              <li>Select Stanbic Bank Kenya Limited as the Beneficiary Bank</li>
              <li>Enter amount to pay (Only amounts less than 1 Million)</li>
              <li>Enter reason for payment</li>
              <li>
                Confirm the details displayed on the page, which you entered in
                steps 3,4 and 5.
              </li>
            </ol>
          </div>
        )}
        {selectedType === "RTGS" && (
          <div className="w-[370px] mx-5 h-[500px] mt-8" id="RTGS">
            <ol className="list-decimal pr-8">
              <li>Select RTGS/SWIFT on your Bank's menu</li>
              <li>Bank Name; Stanbic Bank</li>
              <li>Account name: Stanbic Statutory Payments - 230010</li>
              <li>Account number: 1115510000348</li>
              <li>Branch Name: Chiromo Branch</li>
              <li>Swift: SBICKENX</li>
              <li>Country: Kenya</li>
              <li>Enter amount to pay</li>
              <li>Enter reason for payment</li>
              <li>
                Confirm the details displayed on the page, which you entered in
                steps 2,3,4, 5, 6 and 7
              </li>
            </ol>
          </div>
        )}
        {selectedType === "Cash" && (
          <div className="w-[370px] pr-10 h-[500px] mt-8 " id="Cash">
            <p>
              To top up your wallet using cash, visit any Stanbic Bank Branch
              with the following details.
            </p>
            <p>
              Account name as Stanbic Statutory Payments and account number as
              1115510000348
            </p>
          </div>
        )}
        {selectedType === "M-pesa" && (
          <div className="w-[370px] mx-2 h-[500px] mt-8 ml-5" id="M-pesa">
            <div className="flex space-x-2">
              <img src={Mpesa} alt="" className="w-20" />
              <h1 className="mt-3 text-xl font-semi-bold">Top-Up With Mpesa</h1>
            </div>
            <div className=" space-y-2 ">
              <input
                className="w-72 p-2 border-2 border-gray-400"
                type="number"
              />
              <input
                className="w-72 p-2 border-2 border-gray-400"
                type="number"
              />
              <button className="w-72 bg-custom-green p-2 rounded-sm">
                Request Top Up
              </button>
            </div>
            <div className="mt-6 mr-6">
              <h1
                className="text-center mr-14 p-2 px-4 border-2 border-gray-400 my-4 cursor-pointer flex justify-between items-center"
                onClick={toggleList}
              >
                Top Up Manually {showList ? <FaChevronUp /> : <FaChevronDown />}
              </h1>
              {showList && (
                <ol className="list-decimal pl-4">
                  <li className="py-1">Go to Mpesa Menu on your Sim toolkit</li>
                  <li className="py-1">Select Lipa na M-PESA</li>
                  <li className="py-1">Select Pay Bill</li>
                  <li className="py-1">Enter the business number 8250250</li>
                  <li className="py-1">Enter account as: 1115510000348</li>
                  <li className="py-1">Enter Desired amount to top up</li>
                  <li className="py-1">Enter your PIN and send</li>
                  <li className="py-1">
                    You will receive a confirmation message from Mpesa
                  </li>
                </ol>
              )}
            </div>
          </div>
        )}
      </div>
      </div>
      {/* <div className="mb-32">
      <CashbackRewards/>
      </div> */}
      
    </>
  );
};

export default TopUp;
