import React, { useState } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";

/** temp user object for UI creation purposes only */

const user = {
  name: "name 1",
  email: "email 1",
  password: "password 1",
  dateOfBirth: "2000-01-01",
  phoneNum: "phoneNum 1",
  address: "address 1",
  img: "img 1",
  id: "1",
};

export const ProfileEdit = () => {
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const saveEdit = async () => {
    try {
      const response = await fetch(
        `https://6566fd1464fcff8d730f82fe.mockapi.io/users/${editedUser.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedUser),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save changes");
      }

      console.log("Save successful");
    } catch (error) {
      console.error("Error saving changes:", error.message);
    }
  };
  return (
    <>
      <section className="profile-header">
        <p href="#">
          <i id="backIcon">
            <Link to="/profile">◀</Link>
          </i>
        </p>
        <h3 id="title">Personal Data</h3>
        <button id="saveButton" type="submit" value="Submit" onClick={saveEdit}>
          Save
        </button>
      </section>
      <section className="image-container">
        <img className="profile-image" src={editedUser.img} alt="user image" />
        <button className="edit-button">&#9998;</button>
      </section>
      <form id="editForm">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name.."
          value={editedUser.name}
          onChange={handleInputChange}
        />
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          placeholder="Your date of birth.."
          value={editedUser.dateOfBirth}
          onChange={handleInputChange}
        />
        <label htmlFor="phoneNum">Phone Number</label>
        <input
          type="text"
          id="phoneNum"
          name="phoneNum"
          placeholder="Your phone number.."
          value={editedUser.phoneNum}
          onChange={handleInputChange}
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Your address.."
          value={editedUser.address}
          onChange={handleInputChange}
        />
      </form>
    </>
  );
};
