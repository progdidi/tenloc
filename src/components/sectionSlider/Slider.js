
import './slider.scss';
import { useEffect, useRef, useState } from 'react';

//components
import SliderBtn from './sliderBtn/SliderBtn';



const Slider = ({dataSlider, children}) => {

    const [slideIndex, setSlideIndex] = useState(0);

    const delay = 2500;
    const timeoutRef = useRef(null);

    const moveSlide = useEffect(() => {
        timeoutRef.current = setTimeout(
          () =>
            setSlideIndex((prevIndex) =>
              prevIndex === dataSlider.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {};
      }, [slideIndex]);

    const sliderSettings = {
        dots: true,
        buttons: true,
        number: 5
    }

    const nextSlide = () => {
        alert('ff');
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
        
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }



    return ( 
        <div className="slider">
            <div className="slider-wrapper" style={{ transform: `translate3d(${-slideIndex * 100}%, 0, 0)` }}>
                {dataSlider.map((item, i) => {
                    return (
                        <div className={slideIndex === i + 1 ? "slide active" : "slide"}
                            key={i}>
                                {children}
                        </div>
                    )
                })}
                
            </div>

            <div className="slider-dots">
                {Array.from({length: 5}).map((index) => (
                    <button 
                        key={index}
                        className={`slider-dots__item${slideIndex === index ? " active" : ""}`}
                        onClick={() => moveDot(index + 1)}
                    >
                    </button>
                ))}
            </div>

            <div className="slider-buttons">
                <SliderBtn moveSlide={prevSlide} direction={"prev"}/>
                <SliderBtn moveSlide={nextSlide} direction={"next"}/>
            </div>

            
            
            
        </div>
        
     );
}
 
export default Slider;