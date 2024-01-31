import ReviewsItem from '../reviewsItem/ReviewsItem';
import './reviewsSlider.scss';

import SliderButtons from './sliderButtons/SliderButtons';



const ReviewsSlider = () => {
    return ( 
        <div className="reviews__slider">
            <ReviewsItem></ReviewsItem>
        </div>
     );
}
 
export default ReviewsSlider;