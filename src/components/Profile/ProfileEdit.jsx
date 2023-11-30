import React, { useEffect, useState } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";

export const ProfileEdit = () => {
    // todo: get userID from context/local storage
    const [editedUser, setEditedUser] = useState({
        name: "",
        dateOfBirth: "",
        phoneNum: "",
        address: "",
        img: "",
        id: 1,
    });
    // fetch user on load
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(
                    `https://6566fd1464fcff8d730f82fe.mockapi.io/users/${editedUser.id}`
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch user data");
                }

                const userData = await response.json();
                setEditedUser(userData);
            } catch (error) {
                console.error("Error fetching user data:", error.message);
            }
        };

        // Fetch user data when the component mounts
        fetchUser();
    }, [editedUser.id]);

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
                <button
                    id="saveButton"
                    type="submit"
                    value="Submit"
                    onClick={saveEdit}
                >
                    Save
                </button>
            </section>
            <div className="center-div">
                <section className="image-container">
                    <img
                        className="profile-image"
                        src={editedUser.img}
                        alt="user image"
                    />
                    <button className="edit-button">&#9998;</button>
                </section>
            </div>
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
