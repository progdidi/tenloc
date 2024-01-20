import fav from './fav.svg';
import plus from './plus.svg';

//styles
import './excursionItem.scss';

const ExcursionItem = ({img, title, descr, price}) => {
    return ( 
        <div className="excursion__item">
            <img src={fav} alt="" className="excursion__item-fav" />
            <img src={img} alt="" className="excursion__item-img" />
            <div className="excursion__item-about">
                <h5 className="excursion__item-title">{title}</h5>
                <p className="excursion__item-descr">{descr}</p>
            </div>

            <div className="excursion__item-details">
                <p className="excursion__item-price"> <span>от {price} ₽</span> / с чел</p>
                <input type="text" className="excursion__item-date" />
                <button className="excursion__item-btn">
                    <img src={plus} alt="" className="excursion__item-plus" />
                </button>
            </div>
        </div>
     );
}
 
export default ExcursionItem;