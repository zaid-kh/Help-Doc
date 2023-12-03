import React from "react";
import Toolbar from "../Toolbar/Toolbar";

export const AppointementSummary = () => {
  return (
    <>
      {/* //todo: back to correct page (select date and time) */}
      <Toolbar title="Summary" route="/" />
      <section className="consultation-schedule">
        <h2>Consultation Schedule</h2>
        <section className="days-left"></section>
      </section>
    </>
  );
};
