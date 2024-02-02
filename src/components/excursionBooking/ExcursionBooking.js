import './excursionBooking.scss';

//components
import DateInput from '../dateInput/DateInput';
import DetailItem from './detailsItem/DetailItem';
import SelectInput from '../selectInput/SelectInput';

//hooks

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

    const groupOptions = [
        {
            value: 'Группа до 6 человек',
            label: 'Группа до 6 человек'
        },

        {
            value: 'Группа до 4 человек',
            label: 'Группа до 4 человек'
        },

        {
            value: 'Группа до 10 человек',
            label: 'Группа до 10 человек'
        }
    ];

    return ( 
        <div className="booking">
            <div className="booking__main">
                <h4 className="booking__title">Забронировать экскурсию</h4>

                <div className="booking__inputs">
                    <input type="text" className="booking__input" placeholder='завтра' />
                    <DateInput/>
                    <SelectInput options={groupOptions}/>
                </div>

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

            <div className="booking__info">
                <div className="booking__info-item">
                    <h6 className="booking__info-title">Место встречи:</h6>
                    <p className="booking__info-text">Дворцовая площадь, Александровская колонна.</p>
                </div>
                <div className="booking__info-item">
                    <h6 className="booking__info-title">Место окончания:</h6>
                    <p className="booking__info-text">Дворцовая набережная, 34</p>
                </div>
                <div className="booking__info-item">
                    <h6 className="booking__info-title">Длительность:</h6>
                    <p className="booking__info-text">2 часа</p>
                </div>
            </div>
            
        </div>
     );
}
 
export default ExcursionBooking;