import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Auth/Navbar";
import { Navigation } from "./components/Navigation";
import LoginMain from "./components/Login/LoginMain";
import DashBoard from "./components/Dashboard/DashBoard";
import { BrowserRouter } from "react-router-dom";
import Appointments from "./components/Appointments/Appointments";
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* <Route exact path="/" element={<Home/>} /> */}
                    {/* <Link to="/auth/login">Login</Link> */}
                    <Route path="/auth">
                        <Route path="/auth/login" element={<LoginMain />} />
                        {/* <AuthRoutes /> */}
                    </Route>
                    <Route path="/dashboard" element={<DashBoard />} />

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
