import './ratingStars.scss';
import star from './star.svg';

const RatingStars = ({rate}) => {
    return ( 
        <div className="rating-stars">
            <div className="rating-stars__item">
                <img src={star} alt="" className="rating-stars__item-img" />
            </div>
            <div className="rating-stars__item">
                <img src={star} alt="" className="rating-stars__item-img" />
            </div>
            <div className="rating-stars__item">
                <img src={star} alt="" className="rating-stars__item-img" />
            </div>
            <div className="rating-stars__item">
                <img src={star} alt="" className="rating-stars__item-img" />
            </div>
            <div className="rating-stars__item">
                <img src={star} alt="" className="rating-stars__item-img" />
            </div>
        </div>
     );
}
 
export default RatingStars;