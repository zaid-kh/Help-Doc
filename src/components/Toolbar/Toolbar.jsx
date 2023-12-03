import React from "react";
import { Link } from "react-router-dom";
import { IoChevronBackSharp } from "react-icons/io5";
import "./toolbar.css";

const Toolbar = ({ title, route, showButton, onSaveClick }) => {
  return (
    <section className="profile-header">
      <Link to={route}>
        <IoChevronBackSharp />
      </Link>
      <h3 id="title">{title}</h3>
      {showButton && (
        <button
          id="saveButton"
          type="submit"
          value="Submit"
          onClick={onSaveClick}
        >
          Save
        </button>
      )}
    </section>
  );
};

export default Toolbar;
