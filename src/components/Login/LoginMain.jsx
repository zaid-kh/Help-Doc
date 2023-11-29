import { useState, useRef } from "react";
import "./LoginMain.css";
import LoginNav from "./LoginNav";
import Login from "./Login";
import Register from "./Register";
import Navbar from "../Auth/Navbar";

export default function LoginMain() {
    const [isLogin,setIsLogin] = useState(true)
    return (
        <main className="login-register-container">
            <LoginNav isLogin={isLogin} setIsLogin={setIsLogin}  />
            {/* <Navbar/> */}
            {isLogin ? <Login  /> : <Register/>}
        </main>
    );
}
