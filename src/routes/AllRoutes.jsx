// src/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import WelcomeSlide from "../pages/onBoarding/WelcomeSlide";
import Registration from "../pages/auth/Auth";
import Home from "../pages/Home";
import MainPage from "../pages/main/MainPage";
import Notification from "../pages/main/pages/Notification";
import Practice from '../pages/main/pages/Practice'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/practice" element={<Practice />} />
      <Route path="main" element={<MainPage />} />
      <Route path="welcome" element={<WelcomeSlide />} />
      <Route path="registration" element={<Registration />} />
      <Route  path="notification" element={<Notification/>} />

    </Routes>
  );
};

export default AppRoutes;
