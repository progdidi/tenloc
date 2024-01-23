import './excursionBooking.scss';

import DetailItem from './detailsItem/DetailItem';
import Calendar from '../calendar/Calendar';

const details = [
    {
        detail: 'Взрослый',
        price: 2750,
        amount: 1,
        id: 1
    }, 

    {
        detail: 'Пенсионеры',
        price: 2400,
        amount: 0,
        id: 2
    }, 

    {
        detail: 'Дети c 15 до 18',
        price: 2400,
        amount: 0,
        id: 3
    }, 

    {
        detail: 'Дети до 14 лет',
        price: 2100,
        amount: 0,
        id: 4
    }, 

    {
        detail: 'Дети до 7 лет',
        price: 0,
        amount: 1,
        id: 5
    }, 

]

const ExcursionBooking = () => {

    function chooseDate() {
        
        
    }

    return ( 
        <div className="booking">
            <h4 className="booking__title">Забронировать экскурсию</h4>

            <div className="booking__inputs">
                <input type="text" className="booking__input active" />
                <input type="text" className="booking__input date" onClick={() => chooseDate()}/>
                <input type="text" className="booking__input"/>
            </div>

            <Calendar></Calendar>
            

            <div className="booking__details">
                {details.map((detail) => {
                    return (
                        <DetailItem 
                            key={detail.id}
                            detail={detail.detail}
                            price={detail.price}
                            amount={detail.amount}
                        />
                    )
                })}
            </div>

            <div className="booking__summary">
                <p className="booking__summary-title">Итого</p>
                <p className="booking__summary-sum">5 500 ₽</p>
            </div>

            <button className="booking__btn">Задать вопрос по экскурсии</button>
            <button className="booking__btn active">Добавить в заказ</button>
        </div>
     );
}
 
export default ExcursionBooking;