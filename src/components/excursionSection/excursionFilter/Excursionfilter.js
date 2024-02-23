import { useState } from "react";
import DateInput from "../../dateInput/DateInput";
import SelectInput from '../../selectInput/SelectInput.js';

import './excursionFilter.scss';

const ExcursionFilter = () => {
    //filter options
    const priceOptions = [
        {
            value: '1500 - 5 000 ₽',
            label: '1500 - 5 000 ₽'
        },

        {
            value: '1500 - 5 000 ₽',
            label: '1500 - 5 000 ₽'
        }
        

    ]
    const paymentOptions = [
        {
            value: 'Оплата на месте (без предоплаты)',
            label: 'Оплата на месте (без предоплаты)'
        },

        {
            value: 'Оплата на месте (без предоплаты)',
            label: 'Оплата на месте (без предоплаты)'
        }
        

    ]
    const typeOptions = [
        {
            value: 'Индивидуальная',
            label: 'Индивидуальная'
        },

        {
            value: 'Индивидуальная',
            label: 'Индивидуальная'
        }
    ]

    const [isFilterShow, setIsFilterShow] = useState(false);


    return ( 
        <div className="excursion-filter">
            <button className="excursion-filter__btn" onClick={() => setIsFilterShow(!isFilterShow)}>Фильтр</button>

            <div className={isFilterShow ? "excursion-filter__menu active" : "excursion-filter__menu"}>
                <div className="excursion-filter__item">
                    <label htmlFor="" className="excursion-filter__item-label">Дата
                        <DateInput/>
                        <DateInput/>
                    </label>
                </div>
                <div className="excursion-filter__item">
                    <label htmlFor="" className="excursion-filter__item-label">Цена
                        <SelectInput options={priceOptions}/>
                    </label>
                </div>
                <div className="excursion-filter__item">
                    <label htmlFor="" className="excursion-filter__item-label">Тип оплаты
                        <SelectInput options={paymentOptions}/>
                    </label>
                </div>
                <div className="excursion-filter__item">
                    <label htmlFor="" className="excursion-filter__item-label">Тип экскурсии
                    <SelectInput options={typeOptions}/>
                    </label>
                </div>
            </div>

            
            
        </div>
     );
}
 
export default ExcursionFilter;