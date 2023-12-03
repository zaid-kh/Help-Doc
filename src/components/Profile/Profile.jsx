import React, { useState } from "react";
import { Navigation } from "../Navigation";
import { Link } from "react-router-dom";

/** temp user object for UI creation purposes only */

export const Profile = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const user = JSON.parse(sessionStorage.getItem("user"));
  console.log("user: ", user);
  return (
    <>
      <div className="user-section">
        <img src={user?.img} id="profile-image" alt="user image" />
        <section className="profile-greeting">
          {loggedIn ? <h3>{user?.name}</h3> : <h3>name</h3>}
        </section>
        {/* //todo: replace with logout icon and logout functionality */}
        <button>
          edit
          <Link to="/profileEdit">Edit</Link>
        </button>
        <Navigation />
      </div>
    </>
  );
};
