import "./DoctorDetails.css";
import { IoChevronBackOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { MdOutlineWorkOutline } from "react-icons/md";
import { Link } from "react-router-dom";

import DoctorProfile from "./DoctorProfile";
import Reviews from "./Reviews";

export default function DoctorDetails({ doctor }) {
    return (
        <div className="doctor-details-container">
            <div className="top-bar">
                <Link to="/dashboard">
                    <button className="back-btn-doc-details">
                        <IoChevronBackOutline className="back-icon" />
                    </button>
                </Link>
            </div>
            <DoctorProfile doctor={doctor} />
            <div className="schedule-container">
            <span className="schedule-title">Schedule</span>
            {/* DateCards */}
            </div>
            {doctor.reviews.length > 0 ? <Reviews reviews={doctor.reviews} /> : <div className="no-reviews"><span className="reviews-title">No Reviews</span></div>}
        </div>
    );
}
