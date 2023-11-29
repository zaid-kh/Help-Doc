import { useState, useRef } from "react";
import "./LoginMain.css";
import LoginNav from "./LoginNav";
import Login from "./Login";
import Register from "./Register";
export default function LoginMain() {
    return (
        <main className="login-register-container">
            <LoginNav />
            <Login />
        </main>
    );
}
