import React, { useState } from "react";
import { Navigation } from "../Navigation";
import { Link } from "react-router-dom";
import Heading from '../Heading/Heading'
import IconContainer from "./IconContainer";
import { CgProfile } from "react-icons/cg";

/** temp user object for UI creation purposes only */
const user = {
  name: "name 1",
  email: "email 1",
  password: "password 1",
  dateOfBirth: 1701250340,
  phoneNum: "phoneNum 1",
  address: "address 1",
  img: "img 1",
  id: "1",
};
const itemsList = [
  {
    icon: <CgProfile/>,
    text: 'Item 1',
    route: '/profile',
  },
  {
    icon: <CgProfile/>,
    text: 'Item 2',
    route: '/profile',
  },
  
];

export const Profile = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
    <div>
    <Heading text="My Profile"/>

      <div className="user-section">
          <img src={user.img} id="profile-image" alt="user image" />
          <section className="profile-greeting">
            {loggedIn ? <h3>{user.name}</h3> : <h3>name</h3>}
          </section>
          {/* //todo: replace with icon */}
          <button>
            edit
            <Link to="/profileEdit">Edit</Link>
          </button>
          <Navigation />
      </div>

      <IconContainer title="Personal" items={itemsList}/>
      <IconContainer title="General" items={itemsList}/>

    </div>
      
    </>
  );
};
