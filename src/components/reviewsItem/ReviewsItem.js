import './reviewsItem.scss';
import RatingStars from './ratingStars/RatingStars';

const ReviewsItem = ({name, rate, text, tour, img}) => {
    return ( 
        <div className="reviews__item">
            <img src={img} alt="" className="reviews__item-img" />
            <div className="reviews__item-info">
                <p className="reviews__item-name">{name}</p>
                <div className="reviews__item-about">
                    <p className="reviews__item-tour">Тур: <span>{tour}</span></p>
                    <div className="reviews__item-rate">Оценка: 
                        <RatingStars/>
                    </div>
                </div>
                <p className="reviews__item-text">{text}</p>
            </div>
            
        </div>
     );
}
 
export default ReviewsItem;