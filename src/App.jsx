import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Auth/Navbar";
import { Navigation } from "./components/Navigation";
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

          {/* <Link to="/auth/login">Login</Link> */}
          <Route path="/auth" element={<LoginMain />}>
            {/* <Navbar/> */}
            {/* <AuthRoutes /> */}
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
          </Route>
          <Route path="/dashboard" element={<DashBoard />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/profileEdit" element={<ProfileEdit />} />
          <Route path="/appointments" element={<Appointments />}>
            {/* <Appointments /> */}
            {/* <Navigation /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

const AuthRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/auth/login" element={<LoginMain />} /> */}
        {/* <Route path="/auth/signup" element={<Signup />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
