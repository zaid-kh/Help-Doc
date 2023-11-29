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
            const passwordexist = usersData.find(
                (user) => user.password === password.current.value
            );
            console.log(emailexist, passwordexist);
            if (emailexist && passwordexist) {
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
                const result = await response.json();
                setUsersData(result);
            } catch (error) {
                console.log(error);
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
