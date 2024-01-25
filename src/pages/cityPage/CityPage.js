import DateInput from "../../components/dateInput/DateInput";


import DirectionSection from "../../components/directionSection/DirectionSection";
import ExcursionSection from "../../components/excursionSection/ExcursionSection";
import ReviewSection from "../../components/reviewSection/ReviewSection";

//styles
import './cityPage.scss';


const CityPage = () => {
    return ( 
        <>
            <section className="city">
                <div className="container">
                    <h2 className="city__title page__title">Экскурсии в Санкт-Петербурге</h2>
                    <p className="city__text">1118 экскурсий стоимостью от 150 ₽. Топ достопримечательностей: Эрмитаж, реки и каналы, Царское село и Петергоф.</p>

                    <DateInput/>

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