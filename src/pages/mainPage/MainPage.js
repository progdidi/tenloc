//styles
import './mainPage.scss';

//components
import Promo from "../../components/promo/Promo";

import DirectionSection from '../../components/directionSection/DirectionSection';

import ExcursionItem from "../../components/excursionItem/ExcursionItem";
import {excursions} from "../../helpers/excursions/excursions";

import BlogSection from '../../components/blogSection/BlogSection';

import ReviewSection from '../../components/reviewSection/ReviewSection';

import NewsletterSection from '../../components/newsletterSection/NewsletterSection';


const MainPage = () => {
    return ( 
        <>
            <Promo></Promo>

            <DirectionSection></DirectionSection>

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

            <NewsletterSection></NewsletterSection>


        </>
     );
}
 
export default MainPage;