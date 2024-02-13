import './sliderBtn.scss';

import prev from './prev.svg';
import next from './next.svg';

const SliderBtn = ({direction, moveSlide}) => {
    return ( 
        <button className={direction === "next" ? "slider__btn next": "slider__btn prev"} onClick={() => moveSlide}>
            <img src={direction === "next" ? next : prev} alt="" className="slider__btn-img" />
        </button>
     );
}
 
export default SliderBtn;