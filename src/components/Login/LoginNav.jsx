import React from "react";

export default function LoginNav() {
    let isActive = true;
    return (
        <div className="top-buttons-container">
            <div className="login-register-btn">
                <button id="login-btn" className={`btn ${isActive ? 'active' : 'inactive'}`}>Login</button>
                <button id="register-btn" className="btn">Register</button>
            </div>
        </div>
    );
}
