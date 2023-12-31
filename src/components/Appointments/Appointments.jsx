import React, { useState } from "react";
import { Navigation } from "../Navigation";
import "./appointment.css";
import AppointmentsActivePage from "./AppointmentActivePage";
import AppointmentsHistoryPage from "./AppointmentHistoryPage";
import Heading from "../Heading/Heading";

const Appointments = () => {
  const [activeButton, setActiveButton] = useState("active");

  function handleOnClick(status) {
    setActiveButton(status);
  }

  return (
    <>
      <Heading text="My Appointments" />
      <div className="appointments-btns-container">
        <button
          id={
            activeButton === "active"
              ? "appointment-active-btn"
              : "appointment-notActive-btn"
          }
          onClick={() => handleOnClick("active")}
        >
          Active
        </button>
        <button
          id={
            activeButton === "history"
              ? "appointment-active-btn"
              : "appointment-notActive-btn"
          }
          onClick={() => handleOnClick("history")}
        >
          History
        </button>
      </div>
      {activeButton === "active" ? (
        <AppointmentsActivePage />
      ) : (
        <AppointmentsHistoryPage />
      )}

      <Navigation />
    </>
  );
};

export default Appointments;
