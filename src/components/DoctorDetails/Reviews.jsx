import Review from "./Review";
export default function Reviews({ reviews }) {
    return (
        <>
            <div className="reviews-container">
                <div className="reviews-top-bar">
                    <span className="reviews-title">Reviews</span>
                    <a className="reviews-see-all" href="">
                        See All
                    </a>
                </div>
                <div className="reviews">
                    {reviews.map((review,index) => <Review key={index}  review={review}/>)}
                    
                </div>
            </div>
        </>
    );
}
