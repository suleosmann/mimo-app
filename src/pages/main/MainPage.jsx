import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaHome, FaFileAlt, FaUser, FaBell, FaCog, FaQrcode } from "react-icons/fa";
import ProfileImg from "../../assets/ladydoll.jpeg";
import { useUserStore } from "../../stores/useUserStore"; 
import { useWalletStore } from '../../stores/useWalletStore';
import { useNavigateStore } from '../../stores/useNavigateStore';

const MainPage = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [showNotifications, setShowNotifications] = useState(false);
  const [clickedTab, setClickedTab] = useState("");

  const { user } = useUserStore(); 
  const { topDone, setTopDone } = useWalletStore();
  const { settingPage, setSettingPage, beneficiaryPage, setBeneficiaryPage } = useNavigateStore();
  
  const navigate = useNavigate();

  const handleSettingClick = () => {
    setSettingPage(true);
    navigate('/main/settings');
  };

  const handleBellClick = () => {
    setShowNotifications(true);
    setClickedTab(activeTab);
    navigate('/main/notifications');
  };

  const handleTabClick = (tabLabel) => {
    setActiveTab(tabLabel);
    setShowNotifications(false);
    setClickedTab(tabLabel);
    setTopDone(false);
    setSettingPage(false); 
    setBeneficiaryPage(false);
  
    if (tabLabel === "Home") {
      navigate('/main');
    } else {
      navigate(`/main/${tabLabel.toLowerCase()}`);
    }
  };
  

  const handleBackClick = () => {
    setSettingPage(false);
    setActiveTab("Profile");
    navigate('/main/profile');
  };

  const tabLabels = [
    { label: "Home", icon: <FaHome /> },
    { label: "Statements", icon: <FaFileAlt /> },
    { label: "Scan", icon: <FaQrcode /> },
    { label: "Profile", icon: <FaUser /> },
  ];

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow overflow-y-auto">
        <div className="flex justify-between mt-6 mx-8 text-custom-dark-green">
          {showNotifications ? (
            <div className="mt-4">
              <h1 className="text-xl font-semibold">Notifications</h1>
            </div>
          ) : settingPage ? (
            <div className="mt-4 flex space-x-2">
              <FaArrowLeft className="mt-2 cursor-pointer" onClick={handleBackClick} />
              <h1 className="text-xl font-semibold">Settings</h1>
            </div>
          )   : beneficiaryPage ? (
            <div className="mt-4">
              <h1 className="text-xl font-semibold">Beneficiary</h1>
            </div>

          ): activeTab !== "Home" ? (
            <div className="mt-4">
              <h1 className="text-xl font-semibold">{activeTab}</h1>
            </div>
          ) : (
            <div className="mt-4 font-montserrat">
              <h1 className="text-sm">Morning</h1>
              <h1 className="text-xl font-semibold">
                {user ? `${user.firstName} ${user.lastName}` : "Jane Smith"}
              </h1>
            </div>
          )}
          <div className="flex space-x-2">
            <FaBell className="w-6 h-5 mt-4" onClick={handleBellClick} />
            {activeTab === "Profile" ? (
              <FaCog className="w-6 h-5 mt-4" onClick={handleSettingClick} />
            ) : (
              <img
                src={ProfileImg}
                alt="Profile image"
                className="w-[52px] h-[52px] rounded-full"
              />
            )}
          </div>
        </div>
  
        <Outlet />
      </div>
      <div className="fixed bottom-0 w-full bg-custom-dark-green border-t border-gray-200">
        <div className="flex justify-around p-4">
          {tabLabels.map((tab) => (
            <button
              key={tab.label}
              className={`flex flex-col items-center space-y-1 ${activeTab === tab.label ? 'text-white' : 'text-custom-green'}`}
              onClick={() => handleTabClick(tab.label)}
            >
              {tab.icon}
              <span className="text-xs">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
