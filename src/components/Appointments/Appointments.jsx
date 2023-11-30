import React, { useState } from "react";
import { Navigation } from "../Navigation";
import "./appointment.css";
import AppointmentsActivePage from "./AppointmentActivePage";
import AppointmentsHistoryPage from "./AppointmentHistoryPage";

const Appointments = () => {
  const [doc, setDoc] = useState();

  return (
    <>
      <h1 id="appointment-title">My Appointment</h1>
      <AppointmentsActivePage />
      <Navigation />
    </>
  );
};

export default Appointments;
