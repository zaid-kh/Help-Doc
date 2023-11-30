import React from "react";

export default function AppointmentHistoryButton() {
  return (
    <>
      <div className="appointments-btns-container ">
        <button id="appointment-active-btn-inactive">Active</button>
        <button id="appointment-history-btn-active">History</button>
      </div>
    </>
  );
}
