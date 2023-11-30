import React, { useState } from "react";
import { Navigation } from "../Navigation";
import { Link } from "react-router-dom";
import IconContainer from "./IconContainer";
import { CgProfile } from "react-icons/cg";

const user = JSON.parse(sessionStorage.getItem("user"));
console.log("user: ", user);

const itemsList = [
  {
    icon: <CgProfile />,
    text: "Item 1",
    route: "/profile",
  },
  {
    icon: <CgProfile />,
    text: "Item 2",
    route: "/profile",
  },
];

export const Profile = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <>
      <div>
        <div className="user-section">
          <img src={user.img} id="profile-image" alt="user image" />
          <section className="profile-greeting">
            {loggedIn ? <h3>{user.name}</h3> : <h3>name</h3>}
          </section>
          {/* //todo: replace with logout icon and logout functionality */}
          <button>
            <Link to="/profileEdit">Edit</Link>
          </button>

          <Navigation />
        </div>

        <IconContainer title="Personal" items={itemsList} />
        <IconContainer title="General" items={itemsList} />
      </div>
    </>
  );
};
