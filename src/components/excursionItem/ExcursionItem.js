import fav from './fav.svg';
import plus from './plus.svg';
import minus from './minus.svg';

//styles
import './excursionItem.scss';

//components
import Basket from '../basket/Basket';
import SelectInput from '../selectInput/SelectInput';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const ExcursionItem = ({img, title, descr, price, time}) => {

    const [showBasket, setShowBasket] = useState(false);
    const [isExcursionSelected, setIsExcursionSelected] = useState(false);

    function selectExcursion() {
        setShowBasket(!showBasket);
        setIsExcursionSelected(!isExcursionSelected);
    }

    const timeOptions = [
        {
            value: 'c 10 до 12',
            label: 'c 10 до 12'
        },

        {
            value: 'c 10 до 12',
            label: 'c 10 до 12'
        }
        

    ]

    return ( 
        <>
            <div className="excursion__item">
                <NavLink to='/excursion'>
                <img src={fav} alt="" className="excursion__item-fav" />
                <img src={img} alt="" className="excursion__item-img" />
                <div className="excursion__item-about">
                    <h5 className="excursion__item-title">{title}</h5>
                    <p className="excursion__item-descr">{descr}</p>
                </div>
                </NavLink>

                <div className="excursion__item-details">
                    <p className="excursion__item-price"> <span>от {price} ₽</span> / с чел</p>
                    <SelectInput placeholder="выберите имя" options={timeOptions}/>
                    <button className={isExcursionSelected ? "excursion__item-btn selected" : "excursion__item-btn"} onClick={() => selectExcursion()}>
                        {isExcursionSelected ? <img src={minus} alt="" className="excursion__item-plus" /> : <img src={plus} alt="" className="excursion__item-plus" />}
                       
                    </button>
                </div>
                
            </div>

            <Basket showBasket={showBasket}/>
        </>
        
     );
}
 
export default ExcursionItem;