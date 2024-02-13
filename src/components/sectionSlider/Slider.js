import ReviewsItem from '../reviewsItem/ReviewsItem';
import './slider.scss';

import SliderButtons from './sliderButtons/SliderButtons';
import SliderBtn from './sliderBtn/SliderBtn';
import { useState } from 'react';



const Slider = ({data, children}) => {

    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        console.log(data.length);
        if(slideIndex !== data.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === data.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(data.length)
        }
    }


    return ( 
        <div className="slider">
            {
                data.map((item, i) => {
                    return (
                        <div className={slideIndex === i + 1 ? "slider__item active" : "slider__item"} key={item.id}>
                            {children}
                        </div>
                    )
                })
            }

            <SliderBtn moveSlide={nextSlide} direction={"next"}/>
            <SliderBtn moveSlide={prevSlide} direction={"prev"}/>
        </div>
     );
}
 
export default Slider;