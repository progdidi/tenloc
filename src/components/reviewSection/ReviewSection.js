import './reviewSection.scss';

import ReviewsItem from '../reviewsItem/ReviewsItem';
import { reviews } from '../../helpers/reviews/reviews';

const ReviewSection = () => {
    return ( 
        <>
        <section className="reviews">
            <div className="container">
                <div className="reviews__inner">
                    <div className="reviews__info">
                        <h3 className="section__title reviews__title">Отзывы</h3>
                        <p className="reviews__descr">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        <button className="reviews__btn main-btn">Оставить отзыв</button>
                    </div>
                    {reviews.map((review) => {
                        return (
                            <ReviewsItem
                                name={review.name}
                                tour={review.tour}
                                text={review.text}
                                rate={review.rate}
                                key={review.id}
                                img={review.img}
                            />
                        )
                    })}
                </div>

                
            </div>
        </section>
        </>
     );
}
 
export default ReviewSection;