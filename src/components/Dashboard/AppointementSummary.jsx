import React from "react";
import Toolbar from "../Toolbar/Toolbar";
import "./summary.css";
import { IoCall, IoChatbubbleEllipsesOutline, IoMail } from "react-icons/io5";

function PersonInformation({ isDoctor, PersonObj }) {
  return (
    <section className="person-information">
      <h3>{isDoctor ? "Doctor" : "Patient"} Information</h3>
      <section className="person-information-card">
        <div className="person-card-info">
          <img
            src="https://media.licdn.com/dms/image/C4E03AQGES28DfGAsdw/profile-displayphoto-shrink_800_800/0/1626193988107?e=1706745600&v=beta&t=DDEh5l9egx39QmDpZxsDW_JEbmQyFtQe1HsduAfQ1Ks"
            alt="name's image"
            className="person-card-image"
          />
          <div>
            <h4>Name</h4>
            <h6 className="light-gray-2">Occupation</h6>
          </div>
          {isDoctor ? (
            <IoChatbubbleEllipsesOutline color="#0D53FC" size={30} />
          ) : (
            ""
          )}
        </div>
        <hr className="horizontal-line" />
        <div className="person-card-contact">
          {/* //todo: add correct contact details */}
          <section id="person-card-contact-phone" className="contact-info">
            <IoCall color="#0085FF" className="contact-icon" size={25} />
            <div className="">
              <li className="light-gray-1">Phone</li>
              <li className="bold neutral-black">+068686068</li>
            </div>
          </section>
          <section id="person-card-contact-email" className="contact-info">
            <IoMail color="#F85E5E" className="contact-icon" size={25} />
            <div className="">
              <li className="light-gray-1">E-mail</li>
              <li className="bold neutral-black">person@gmail.com</li>
            </div>
          </section>
        </div>
      </section>
    </section>
  );
}
export const AppointementSummary = () => {
  return (
    <>
      {/* //todo: back to correct page (select date and time) */}
      <Toolbar title="Summary" route="/" />
      <div className="cards">
        <section className="consultation-schedule">
          <h3>Consultation Schedule</h3>
          <section className="consultation-card">
            <div className="consultation-card-labels neutral-black">
              <li className="bold">Date</li>
              <li>Time</li>
            </div>
            <div className="consultation-card-time">
              {/* //todo: add correct num of days */}
              <li className="bold light-gray-1">3 Days</li>
              <li className="light-gray-2">From Today</li>
            </div>
          </section>
        </section>
        <PersonInformation isDoctor={true} />
        <PersonInformation />
      </div>
    </>
  );
};
