import './excursionSection.scss';

//components
import ExcursionItem from '../excursionItem/ExcursionItem';
import { excursions } from '../../helpers/excursions/excursions';
import DateInput from '../dateInput/DateInput';
import DirectionInput from './directionInput/DirectionInput';

const ExcursionSection = () => {
    return ( 
        <section className="excursions">
            <div className="container">
                <div className="excursions__top">
                    <h3 className="excursions__title section__title">Экскурсии</h3>
                    <DirectionInput/>
                    <DateInput/>
                </div>
                

                <div className="excursions__items">
                    {excursions.map((excursion) => {
                        return (
                            <ExcursionItem
                                key={excursion.id}
                                img={excursion.img}
                                price={excursion.price}
                                title={excursion.title}
                                descr={excursion.descr}
                                time={excursion.time}
                            />
                        )
                    })}
                </div>

                <button className="excursions__btn main-btn">Все экскурсии</button>
            </div>
        </section>
     );
}
 
export default ExcursionSection;