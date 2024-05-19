import React, { useState } from "react";
import TabPanel from "./TabPanel";
import Tabs from "./Tabs";
import Home from "./pages/Home";
import Statements from "./pages/Statements";
import Pay from "./pages/wallet/Pay";
import Beneficiaries from "./pages/Beneficiaries";
import Profile from "./pages/Profile";
import { FaArrowLeft, FaHome, FaFileAlt, FaUserFriends, FaUser, FaBell, FaCog, FaMoneyBill } from "react-icons/fa";
import ProfileImg from "../../assets/ladydoll.jpeg";
import Notification from "./pages/Notification";
import { useUserStore } from "../../stores/useUserStore"; 
import TopUp from ".././main/pages/wallet/TopUp";
import { useWalletStore } from '../../stores/useWalletStore';
import { useNavigateStore } from '../../stores/useNavigateStore';
import Setting from './pages/Settings';

const MainPage = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [showNotifications, setShowNotifications] = useState(false);
  const [clickedTab, setClickedTab] = useState("");

  const { user } = useUserStore(); 
  const { topDone, setTopDone } = useWalletStore();
  const { settingPage, setSettingPage } = useNavigateStore();

  const handleSettingClick = () => {
    setSettingPage(true);
  };

  const handleBellClick = () => {
    setShowNotifications(true);
    setClickedTab(activeTab);
  };

  const handleTabClick = (tabLabel) => {
    setActiveTab(tabLabel);
    setShowNotifications(false);
    setClickedTab(tabLabel);
    setTopDone(false);
    setSettingPage(false); // Ensure Settings page is hidden
  };

  const handleBackClick = () => {
    setSettingPage(false);
    setActiveTab("Profile");
  };

  const tabLabels = [
    { label: "Home", icon: <FaHome />, component: <Home /> },
    { label: "Statements", icon: <FaFileAlt />, component: <Statements /> },
    { label: "Pay", icon: <FaMoneyBill />, component: <Pay /> },
    { label: "Beneficiaries", icon: <FaUserFriends />, component: <Beneficiaries /> },
    { label: "Profile", icon: <FaUser />, component: <Profile /> },
  ];

  return (
    <div>
      <div className="flex justify-between mt-16 mx-8 text-custom-dark-green">
        {showNotifications ? (
          <div className="mt-4">
            <h1 className="text-xl font-semibold">Notifications</h1>
          </div>
        ) : settingPage ? (
          <div className="mt-4 flex space-x-2">
            <FaArrowLeft className="mt-2 cursor-pointer" onClick={handleBackClick} />
            <h1 className="text-xl font-semibold">Settings</h1>
          </div>
        ) : activeTab !== "Home" ? (
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

      <Tabs activeTab={activeTab} setActiveTab={handleTabClick}>
        {tabLabels.map((tab) => (
          <TabPanel
            key={tab.label}
            label={tab.label}
            icon={tab.icon}
            activeTab={activeTab}
          >
            {showNotifications && clickedTab === tab.label ? (
              <Notification />
            ) : settingPage ? (
              <Setting />
            ) : tab.label === 'Home' && topDone ? (
              <TopUp />
            ) : (
              tab.component
            )}
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default MainPage;
