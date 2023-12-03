import React from "react";
import Toolbar from "../Toolbar/Toolbar";
import "./summary.css";

export const AppointementSummary = () => {
  return (
    <>
      {/* //todo: back to correct page (select date and time) */}
      <Toolbar title="Summary" route="/" />
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
    </>
  );
};
