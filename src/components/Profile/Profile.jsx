import React, { useState } from "react";

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

export const Profile = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <div className="user-section">
        <img src={user.img} id="profile-image" alt="user image" />
        <section className="profile-greeting">
          {loggedIn ? <h3>{user.name}</h3> : <h3>name</h3>}
        </section>
      </div>
    </>
  );
};
