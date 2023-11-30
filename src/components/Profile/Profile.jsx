import React, { useState } from "react";
import { Navigation } from "../Navigation";
import { Link } from "react-router-dom";
import IconContainer from "./IconContainer";
import { CgBell, CgFileDocument, CgProfile } from "react-icons/cg";
import { LuShieldCheck } from "react-icons/lu";
import { GoQuestion } from "react-icons/go";
import { IoAlertCircleOutline, IoLogOutOutline } from "react-icons/io5";

import Heading from "../Heading/Heading";

const user = JSON.parse(sessionStorage.getItem("user"));
console.log("user: ", user);

const personalItemsList = [
  {
    icon: <CgProfile />,
    text: "Account",
    route: "/profileEdit",
  },
  {
    icon: <CgFileDocument />,
    text: "Personal Data",
    route: "/profileEdit",
  },
];
const generalItemsList = [
  {
    icon: <CgBell />,
    text: "Notifications",
    route: "/profile",
  },
  {
    icon: <LuShieldCheck />,
    text: "Security",
    route: "/profile",
  },
  {
    icon: <GoQuestion />,
    text: "Help",
    route: "/profile",
  },
  {
    icon: <IoAlertCircleOutline />,
    text: "About",
    route: "/profile",
  },
];
export const Profile = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  function signOut() {
    sessionStorage.clear();
    console.log("session cleared");
  }
  function LogOut() {
    return (
      <>
        <Link to={"/"}>
          <IoLogOutOutline onClick={signOut} />
        </Link>
      </>
    );
  }

  return (
    <>
      <div>
        <Heading text="My Profile" />
        <div className="user-section">
          <img src={user.img} id="profile-image" alt="user image" />
          <section className="profile-greeting">
            {loggedIn ? <h3>{user.name}</h3> : <h3>name</h3>}
          </section>
          <LogOut />
          <Navigation />
        </div>

        <IconContainer title="Personal" items={personalItemsList} />
        <IconContainer title="General" items={generalItemsList} />
      </div>
    </>
  );
};
