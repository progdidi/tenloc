import DateInput from "../../components/dateInput/DateInput";


import DirectionSection from "../../components/directionSection/DirectionSection";
import ExcursionSection from "../../components/excursionSection/ExcursionSection";
import ReviewSection from "../../components/reviewSection/ReviewSection";
import SelectInput from "../../components/selectInput/SelectInput";

//styles
import './cityPage.scss';


const CityPage = () => {

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


    return ( 
        <>
            <section className="city">
                <div className="container">
                    <h2 className="city__title page__title">Экскурсии в Санкт-Петербурге</h2>
                    <p className="city__text">1118 экскурсий стоимостью от 150 ₽. Топ достопримечательностей: Эрмитаж, реки и каналы, Царское село и Петергоф.</p>

                    <div className="excursion-filter">
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

                    <div className="city__excursions">
                        
                        <ExcursionSection></ExcursionSection>
                        <button className="city__excursions-btn">Загрузить еще</button>
                    </div>
                </div>
                

            </section>

            <DirectionSection/>

            <ReviewSection/>
        </>
     );
}
 
export default CityPage;