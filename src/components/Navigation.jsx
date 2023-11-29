import React from "react";
import { Link,useNavigate } from 'react-router-dom';
import { FiHome } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa6";


export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="bottom-nav">
    <ul className="icons-list">
      <li>
        <Link to="/dashboard"><FiHome /></Link>
      </li>
      <li>
        <Link to="/appointments"><FaRegHeart /></Link>
      </li>
      <li>
        <Link to="/profile"><CgProfile /></Link>
      </li>
    </ul>
  </nav>
  )
};
