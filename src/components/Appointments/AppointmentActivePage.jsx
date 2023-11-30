import React, { useState } from "react";
import "./appointment.css";
import AppointmentActiveButtons from "./AppointmentActiveButtons";
import AppointmentActiveCard from "./AppointmentActiveCard";

const AppointmentsActivePage = () => {
  return (
    <div>
      {/* <AppointmentActiveButtons /> */}
      <AppointmentActiveCard />
    </div>
  );
};

export default AppointmentsActivePage;
