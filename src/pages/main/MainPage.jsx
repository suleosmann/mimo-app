// MainPage.jsx
import React, { useState } from 'react';
import TabPanel from './TabPanel';
import Tabs from './Tabs';
import Home from './pages/Home';
import Statements from './pages/Statements';
import Beneficiaries from './pages/Beneficiaries';
import Profile from './pages/Profile';
import { FaHome, FaFileAlt, FaUserFriends, FaUser } from 'react-icons/fa';

const MainPage = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const tabLabels = [
    { label: 'Home', icon: <FaHome />, component: <Home /> },
    { label: 'Statements', icon: <FaFileAlt />, component: <Statements /> },
    { label: 'Beneficiaries', icon: <FaUserFriends />, component: <Beneficiaries /> },
    { label: 'Profile', icon: <FaUser />, component: <Profile /> },
  ];

  return (
    <div>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} >
        {tabLabels.map((tab) => (
          <TabPanel key={tab.label} label={tab.label} icon={tab.icon} activeTab={activeTab}>
            {tab.component}
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default MainPage;
