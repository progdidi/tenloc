import './sliderButtons.scss';

//images
import prev from './prev.svg';
import next from './next.svg';


//components
import SliderBtn from '../sliderBtn/SliderBtn';

const SliderButtons = () => {

   

    

    return ( 
        <div className="slider__buttons">
            <button className="slider__btn" >
                <img src={prev} alt="" className="slider__btn-img" />
            </button>
            <button className="slider__btn">
                <img src={next} alt="" className="slider__btn-img" />
            </button>
        </div>
     );
}
 
export default SliderButtons;