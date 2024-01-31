import './sliderButtons.scss';

//images
import prev from './prev.svg';
import next from './next.svg';


const SliderButtons = () => {
    return ( 
        <div className="slider__buttons">
            <button className="slider__btn prev">
                <img src={prev} alt="" className="slider__btn-img" />
            </button>
            <button className="slider__btn next">
                <img src={next} alt="" className="slider__btn-img" />
            </button>
        </div>
     );
}
 
export default SliderButtons;