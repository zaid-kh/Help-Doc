import React from "react";
import { Link } from "react-router-dom";
import "./IconContainer.css";

const IconContainer = ({ title, items }) => {
  return (
    <div className="item-list-container">
      <h2>{title}</h2>
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index} className="item-list-item">
            <Link to={item.route} className="item-link">
              <div className="item">
                <div className="icon">{item.icon}</div>
                <span className="text">{item.text}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IconContainer;
