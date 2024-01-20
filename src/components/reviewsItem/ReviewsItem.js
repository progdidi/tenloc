import './reviewsItem.scss';

const ReviewsItem = ({name, rate, text, tour, img}) => {
    return ( 
        <div className="reviews__item">
            <img src={img} alt="" className="reviews__item-img" />
            <div className="reviews__item-info">
                <p className="reviews__item-name">{name}</p>
                <div className="reviews__item-about">
                    <div className="reviews__item-tour">{tour}</div>
                    <div className="reviews__item-rate">{rate}</div>
                </div>
                <p className="reviews__item-text">{text}</p>
            </div>
            
        </div>
     );
}
 
export default ReviewsItem;