import { Routes, Route } from "react-router-dom";
import WelcomeSlide from "../pages/onBoarding/WelcomeSlide";
import Registration from "../pages/auth/Auth";
import Home from "../pages/Home";
import MainPage from "../pages/main/MainPage";

// Below this to be inside MainPage
import Notification from "../pages/main/pages/Notification";
import Practice from '../pages/main/pages/Practice'
import Settings from '../pages/main/pages/Settings'
import Statements from "../pages/main/pages/Statements";
import Pay from "../pages/main/pages/wallet/Pay";
import Profile from "../pages/main/pages/Profile";
import Beneficiaries from "../pages/main/pages/Beneficiaries";
import HomePage from "../pages/main/pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/practice" element={<Practice />} />
      <Route path="/welcome" element={<WelcomeSlide />} />
      <Route path="/registration" element={<Registration />} />

      <Route path="/main" element={<MainPage />}>
        <Route path="" element={<HomePage />} />
        <Route path="statements" element={<Statements />} />
        <Route path="scan" element={<Pay />} />
        <Route path="profile" element={<Profile />} />
        <Route path="notifications" element={<Notification />} />
        <Route path="settings" element={<Settings />} />
        <Route path="beneficiaries" element={<Beneficiaries />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
