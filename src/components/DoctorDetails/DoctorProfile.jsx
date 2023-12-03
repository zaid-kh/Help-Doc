import React from "react";
import SmartText from "./SmartText";
const RATING_ICON = (
    <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect
            x="0.5"
            y="0.5"
            width="35"
            height="35"
            rx="5.5"
            fill="white"
            stroke="#DEDEDE"
        />
        <path
            d="M18 12.3893L19.5938 15.6188L19.9428 16.3259L20.7232 16.4393L24.2871 16.9572L21.7083 19.471L21.1436 20.0214L21.2769 20.7987L21.8857 24.3481L18.698 22.6723L18 22.3053L17.302 22.6723L14.1143 24.3481L14.7231 20.7987L14.8564 20.0214L14.2917 19.471L11.7129 16.9572L15.2768 16.4393L16.0572 16.3259L16.4062 15.6188L18 12.3893Z"
            fill="#F1C644"
            stroke="#F1C644"
            strokeWidth="3"
        />
    </svg>
);

const EXPERIENCE_ICON = (
    <svg
        className="experience-icon"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M19.375 6.875C19.3743 6.21218 19.1107 5.57672 18.642 5.10803C18.1733 4.63935 17.5378 4.37572 16.875 4.375H15V3.75C14.9995 3.25288 14.8018 2.77626 14.4503 2.42475C14.0987 2.07323 13.6221 1.87552 13.125 1.875H6.875C6.37788 1.87552 5.90126 2.07323 5.54975 2.42475C5.19823 2.77626 5.00052 3.25288 5 3.75V4.375H3.125C2.46218 4.37572 1.82672 4.63935 1.35803 5.10803C0.889348 5.57672 0.625724 6.21218 0.625 6.875V8.75H19.375V6.875ZM13.75 4.375H6.25V3.75C6.25 3.58424 6.31585 3.42527 6.43306 3.30806C6.55027 3.19085 6.70924 3.125 6.875 3.125H13.125C13.2908 3.125 13.4497 3.19085 13.5669 3.30806C13.6842 3.42527 13.75 3.58424 13.75 3.75V4.375ZM13.125 10.3125C13.125 10.5611 13.0262 10.7996 12.8504 10.9754C12.6746 11.1512 12.4361 11.25 12.1875 11.25H7.8125C7.56386 11.25 7.3254 11.1512 7.14959 10.9754C6.97377 10.7996 6.875 10.5611 6.875 10.3125V10.1562C6.875 10.1148 6.85854 10.0751 6.82924 10.0458C6.79993 10.0165 6.76019 10 6.71875 10H0.625V15.625C0.625 16.288 0.888392 16.9239 1.35723 17.3928C1.82607 17.8616 2.46196 18.125 3.125 18.125H16.875C17.538 18.125 18.1739 17.8616 18.6428 17.3928C19.1116 16.9239 19.375 16.288 19.375 15.625V10H13.2812C13.2398 10 13.2001 10.0165 13.1708 10.0458C13.1415 10.0751 13.125 10.1148 13.125 10.1562V10.3125Z"
            fill="#8195FF"
        />
    </svg>
);

export default function DoctorProfile({ doctor }) {
    function calculateRating() {
        let sum = 0;
        for (const review of doctor.reviews) {
            sum += review.rating;
        }
        let rating = sum/(doctor.reviews.length);
        return rating;
    }
    let numOfRatings = doctor.reviews.length;
    return (
        <>
            <div className="doc-profile">
                <div className="doc-img-container">
                    <img className="doc-img" src={doctor.img} alt="docImg" />
                </div>
                <div className="doc-info-container">
                    <div className="doc-name-profession">
                        <span className="doc-name">{doctor.name}</span>
                        <span className="doc-profession">
                            {doctor.specialist}
                        </span>
                    </div>
                    <div className="doc-rating-experience">
                        <div className="rating">
                            {RATING_ICON}
                            <div className="rating-info">
                                <span>Rating</span>
                                <span className="rate">
                                    {calculateRating()}
                                    <span className="num-of-ratings">
                                        ({numOfRatings})
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="experience">
                            {EXPERIENCE_ICON}
                            <div className="experience-info">
                                <span className="exp">Experience</span>
                                <span>{`${doctor.experience} Years`}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="doc-about">
                <span className="profile-doctor">Profile Doctor</span>
                <SmartText text ={doctor.description} />
            </div>
        </>
    );
}
