import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CiMail } from "react-icons/ci";

export default function Login() {
    const url = "https://6566fd1464fcff8d730f82fe.mockapi.io/users";
    const [usersData, setUsersData] = useState([]);
    const email = useRef();
    const password = useRef();
    const navigate = useNavigate();
    const [invalidInput, setInvalidInput] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.current && password.current) {
            const emailexist = usersData.find(
                (user) => user.email === email.current.value
            );
            const passwordCorrect =
                emailexist.password === password ? true : false;
            console.log(emailexist, passwordCorrect);
            if (emailexist && passwordCorrect) {
                navigate("/dashboard");
            } else {
                console.log("invalid input", invalidInput);
                setInvalidInput((prev) => !prev);
            }
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Failed to fetch user data");
                }
                const result = await response.json();
                setUsersData(result);
                console.log(usersData);
            } catch (error) {
                console.log("Error fetching user data", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="login-form-container">
            <h1>
                Welcome <br />
                Back
            </h1>

            <form id="login-form" onSubmit={handleSubmit}>
                <input
                    ref={email}
                    type="email"
                    name="useremail"
                    id="email-input"
                    placeholder="Email"
                    className={invalidInput ? "invalidInput" : ""}
                />
                <input
                    ref={password}
                    type="password"
                    name="userpassword"
                    id="password-input"
                    placeholder="Password"
                    className={invalidInput ? "invalidInput" : ""}
                />
                <a className="forgot-password" href="">
                    Forgot your password?
                </a>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
}
