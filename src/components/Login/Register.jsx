import React from "react";

export default function Register() {
    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        
    };
    return (
        <div className="register-form-container">
            <h1>
                Create <br />
                Account
            </h1>
            <form id="register-form" onSubmit={handleRegisterSubmit}>
                <input
                    type="email"
                    name="useremail"
                    id="email-input"
                    placeholder="Email"
                />
                <input
                    type="password"
                    name="userpassword"
                    id="password-input"
                    placeholder="Password"
                />
                <input
                    type="password"
                    name="confirmuserpassword"
                    id="confirm-password-input"
                    placeholder="Confirm Password"
                />
                <input type="submit" value="register" />
            </form>
        </div>
    );
}
