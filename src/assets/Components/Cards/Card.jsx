import React from 'react';
import  './Card.css';
import { FaStar } from "react-icons/fa";

const DoctorCard = ({ img, name, type, status, rate }) => {
  return (
    <section className="cards">
      <figcaption className="card">
        <figure className="doctorImg">
          <img src={img} alt="docPic" />
        </figure>
        <section className="description">
          <section className="AllDocDetails">
            <h1 className="name">{name}</h1>
            <h3 className="doctorType">{type}</h3>
          </section>
          <section className="otherDetails">
            <button
              className="status"
              style={{
                backgroundColor: status ? '#53A1FD' : '#DEDEDE',
                color: status ? 'white' : '#8D8D8D',
              }}
            >
              {status ? 'Online' : 'Offline'}
            </button>
            <i className= "fa-star"><FaStar /></i>
            <span className="rating">{rate}</span>
          </section>
        </section>
      </figcaption>
    </section>
  );
};

export default DoctorCard;
