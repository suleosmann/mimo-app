import ProfileImg from "../../../assets/ladydoll.jpeg";
import { useState } from "react";
import { useNavigateStore } from "../../../stores/useNavigateStore";
import { useNavigate } from "react-router-dom";



const Profile = () => {
  const {setBeneficiaryPage} = useNavigateStore()
  const navigate = useNavigate(); // Import the useNavigate hook


  const handleBeneficiaryClick = () => {
    setBeneficiaryPage(true)
    navigate("/main/beneficiaries")
  }

  const handleLogout = () => {
    navigate("/");
  };


  return (
    <div className="mx-8 ">
      
      <div
  className="flex justify-center items-center w-[160px] h-[160px] rounded-full ml-16"
  style={{
    borderWidth: '8px',
    borderStyle: 'solid',
    borderTopColor: '#869794',
    borderRightColor: '#4DBFA3',
    borderBottomColor: '#4DBFA3',
    borderLeftColor: '#869794',
  }}
>
  <img src={ProfileImg} alt="Profile image" className="w-[142px] h-[142px] rounded-full" />
</div>
      <div className="bg-white w-[Fixed (296px)] h-[160px] mt-6 rounded-lg font-montserrat">
        <div className="flex justify-between  pt-2 px-2 mx-2">
          <h1 className="font-bold text-lg">Personal Details</h1>
          <h1 className="text-xs opacity-70">Edit</h1>
        </div>
        <div className="flex  space-x-20 font-bold text-sm	  pt-2 px-2 mx-2">
          <h1>First Name</h1>
          <h1>Last Name</h1>
        </div>
        <div className="flex space-x-32 opacity-70 text-sm	  pt-2 px-2 mx-2">
          <h1>Jane</h1>
          <h1>Smith</h1>
        </div>
        <div className="flex space-x-14 font-bold text-sm	  pt-2 px-2 mx-2">
          <h1>Phone Number</h1>
          <h1>Email</h1>
        </div>
        <div className="flex space-x-11 opacity-70 text-sm	  pt-2 px-2 mx-2">
          <h1>+254 711 000 000</h1>
          <h1>j.smith@mail.com</h1>
        </div>
      </div>
      <div className="flex w-[326px] h-[60px]  mt-2">
        <div className=" w-full h-[60px] bg-white">
          <div className=" flex justify-between  h-[40px]   mt-2 ml-2">
            <div className="space-y-1">
              <h1 className="text-sm font-bold">Beneficiaries</h1>
              <h1 className="text-sm">
              Tim Mwaniki <span className="font-bold ">+5more</span>
              </h1>
            </div>
            <div>
              <button className="text-white text-sm mr-2 my-2 rounded-lg bg-custom-dark-green p-2" onClick={handleBeneficiaryClick}>
                View
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[Fixed (296px)] h-[100px] mt-3 rounded-lg border bg-white">
        <div className="mx-2 my-2 flex justify-between">
          <h1 className="font-bold text-sm">Registered Top Up Options</h1>
          <h1 className="text-xs mr-3 mt-1 opacity-70">Edit</h1>
        </div>
        <div className="flex ml-3 gap-4 font-bold text-xs">
          <div className="w-[62px] h-[55px] text-white bg-custom-dark-green border rounded-lg flex items-center justify-center">
            <h1>Mpesa</h1>
          </div>
          <div className="w-[62px] h-[55px] text-white bg-custom-dark-green border rounded-lg flex items-center justify-center">
            <h1>Bank</h1>
          </div>
          <div className="w-[62px] h-[55px] text-white bg-custom-dark-green border rounded-lg flex items-center justify-center">
            <h1>RTGS</h1>
          </div>
          <div className="w-[62px] h-[55px] text-white bg-custom-dark-green rounded-lg flex items-center justify-center">
            <h1>Card</h1>
          </div>
        </div>
      </div>
      <div>
        <button className="bg-custom-green text-custom-dark-green font-bold w-[325px] h-[44px] rounded-lg absolute bottom-20" onClick={handleLogout}>
          LOG OUT
        </button>
      </div>
    </div>
  );
};

export default Profile;
