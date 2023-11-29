import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const url = "https://6566fd1464fcff8d730f82fe.mockapi.io/users";
    const [usersData, setUsersData] = useState([]);
    const email = useRef();
    const password = useRef();
    const navigate = useNavigate();

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
            }
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                console.log(result);
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
                />
                <input
                    ref={password}
                    type="password"
                    name="userpassword"
                    id="password-input"
                    placeholder="Password"
                />
                <a className="forgot-password" href="">Forgot your password?</a>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
}
