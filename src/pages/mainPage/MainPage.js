//styles
import './mainPage.scss';

//components
import Promo from "../../components/promo/Promo";

import DirectionItem from "../../components/directionItem/DirectionItem";
import {directions} from "../../helpers/directions/directions";

import ExcursionItem from "../../components/excursionItem/ExcursionItem";
import {excursions} from "../../helpers/excursions/excursions";

import BlogSection from '../../components/blogSection/BlogSection';

import ReviewSection from '../../components/reviewSection/ReviewSection';

const MainPage = () => {
    return ( 
        <>
            <Promo></Promo>

            <section className="directions">
                <div className="container">
                    <h3 className="section__title directions__title">Популярные направления</h3>
                    <div className="directions__text">Проводим индивидуальные и групповые экскурсии на русском языке</div>
                    <div className="directions__items">
                        {directions.map((direction) => {
                            return (
                                <DirectionItem
                                    key={direction.id}
                                    bgImage={direction.img}
                                    amount={direction.amount} 
                                    direction={direction.direction}
                                />
                            )                            
                        })}
                    </div>
                </div>
            </section>

            <section className="excursions">
                <div className="container">
                    <h3 className="excursions__title section__title">Экскурсии</h3>
                    <input type="text" className="excursions__input" />
                    <input type="text" className="excursions__input" />

                    <div className="excursions__items">
                        {excursions.map((excursion) => {
                            return (
                                <ExcursionItem
                                    key={excursion.id}
                                    img={excursion.img}
                                    price={excursion.price}
                                    title={excursion.title}
                                    descr={excursion.descr}
                                />
                            )
                        })}
                    </div>

                    <button className="excursions__btn main-btn">Все экскурсии</button>
                </div>
            </section>

            <ReviewSection></ReviewSection>

            <BlogSection></BlogSection>


        </>
     );
}
 
export default MainPage;