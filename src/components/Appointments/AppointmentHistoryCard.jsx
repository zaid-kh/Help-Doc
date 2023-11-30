import React from "react";

export default function AppointmentHistoryCard() {
  return (
    <div>
      <div className="appointment-card-history">
        <img
          className="appointment-doctor-avatar-history"
          src="https://s3-alpha-sig.figma.com/img/207b/3ced/aa89cf836964ff594257ab677ce1a358?Expires=1702252800&Signature=bfsG~RCvehW3MXB6wChCP2VBWOA~dgZEvKq3gC~4XeNz9DJ21sBOq1QuAoVOXo8WuiWGOcSuj~3psEy9OBX-tQ80-k6ZmayV1aktH2OvYB9ppjMgHxbXyq59t615lOSXJZ~G1VKZ20ABt~PCzKooqH~bb0xmRYdD5McUBEZEGzrFQQXib27-~tn8onJzUWYOvtV217Yc8ysh2cpwa4ot-dHIBIuOweERooAdU6n5b0r9iekUksOIY6Xvd~tPGgI7RipAlcOn2YeNQ-vu8bVD1Ho3S5pXuhahmE0NE1vhkJyZUogoQT~vPoZMUaszivcaGu9~TCaOCkBlN4mdRDG55A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="doctor-avatar"
        />

        <h4 className="appointment-doctor-title-history">Billy Long</h4>
        <p className="appointment-doctor-p-history">General Practitioners</p>

        <div className="select-card-history">
          <svg
            id="select-card-arrow"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.87213 3.34088C6.20163 3.01137 6.73587 3.01137 7.06537 3.34088L12.1279 8.40338C12.4574 8.73288 12.4574 9.26712 12.1279 9.59662L7.06537 14.6591C6.73587 14.9886 6.20163 14.9886 5.87213 14.6591C5.54262 14.3296 5.54262 13.7954 5.87213 13.4659L10.338 9L5.87213 4.53412C5.54262 4.20462 5.54262 3.67038 5.87213 3.34088Z"
              fill="#0D53FC"
            />
          </svg>
        </div>
        <div className="divider-history">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="349"
            height="2"
            viewBox="0 0 349 2"
            fill="none"
          >
            <path d="M0 1H349" stroke="#DEDEDE" />
          </svg>
        </div>
        <div>
          <p className="appointment-time-history">
            Thu, Jan 11 at 09.00 AM - 11.30 AM
          </p>
        </div>
      </div>
    </div>
  );
}
