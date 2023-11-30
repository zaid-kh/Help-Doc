import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginMain from "./components/Login/LoginMain";
import DashBoard from "./components/Dashboard/DashBoard";
import { BrowserRouter } from "react-router-dom";
import Appointments from "./components/Appointments/Appointments";
import OnBoardingPage from "./assets/Pages/OnboardingPages/onBoardingPages";
import { Profile } from "./components/Profile/Profile";
import { ProfileEdit } from "./components/Profile/ProfileEdit";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<OnBoardingPage />} />
          <Route path="/auth" element={<LoginMain />}>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
          </Route>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profileEdit" element={<ProfileEdit />} />
          <Route path="/appointments" element={<Appointments />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
