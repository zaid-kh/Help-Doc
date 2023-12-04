import React from "react";
const RATING_STAR = (
    <svg
        width="16"
        height="15"
        viewBox="0 0 16 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M8 3.88933L9.00604 5.92778L9.35504 6.63494L10.1354 6.74834L12.385 7.07522L10.7572 8.66194L10.1925 9.21239L10.3258 9.98964L10.7101 12.2301L8.69801 11.1723L8 10.8053L7.30199 11.1723L5.28991 12.2301L5.67419 9.98964L5.8075 9.21239L5.24279 8.66194L3.61499 7.07522L5.86456 6.74834L6.64496 6.63494L6.99396 5.92778L8 3.88933Z"
            fill="#F1C644"
            stroke="#F1C644"
            strokeWidth="3"
        />
    </svg>
);
export default function Review({ review }) {
    return (
        <div className="review">
            <div className="review-info">
                <div className="review-writer">
                    <img
                        className="reviewer-img"
                        src={review?.user.img}
                        alt="reviewer img"
                    />
                    <div className="reviewer-title-container">
                        <span className="reviewer-title">
                            {review?.user.name}
                        </span>
                        <span className="reviewer-subtitle">subtitle</span>
                    </div>
                </div>
                <div className="review-rating">
                    {RATING_STAR}
                    <span className="rating-txt">{review?.rating}</span>
                </div>
            </div>
            <div className="review-content">
              <span className="review-txt">{review?.review}</span>
            </div>
        </div>
    );
}
