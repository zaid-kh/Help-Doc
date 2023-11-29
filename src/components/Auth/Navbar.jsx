import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to="/auth/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/auth/signup">Signup</Link>
                    </li>
                </ul>
            </nav>
        </BrowserRouter>
    );
};

export default Navbar;
