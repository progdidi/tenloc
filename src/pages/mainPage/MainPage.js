//styles
import './mainPage.scss';

//components
import Promo from "../../components/promo/Promo";

import DirectionItem from "../../components/directionItem/DirectionItem";
import {directions} from "../../helpers/directions/directions";

import ExcursionItem from "../../components/excursionItem/ExcursionItem";
import {excursions} from "../../helpers/excursions/excursions";

import ReviewsItem from "../../components/reviewsItem/ReviewsItem";
import { reviews } from '../../helpers/reviews/reviews';

import BlogItem from '../../components/blogItem/BlogItem';
import { blogs } from '../../helpers/blogs/blogs';

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

            <section className="reviews">
                <div className="container">
                    <div className="reviews__inner">
                        <div className="reviews__info">
                            <h3 className="section__title reviews__title">Отзывы</h3>
                            <p className="reviews__descr">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                            <button className="reviews__btn main-btn">Оставить отзыв</button>
                        </div>
                        {reviews.map((review) => {
                            return (
                                <ReviewsItem
                                    name={review.name}
                                    tour={review.tour}
                                    text={review.text}
                                    rate={review.rate}
                                    key={review.id}
                                    img={review.img}
                                />
                            )
                        })}
                    </div>
                    
                </div>
            </section>

            <section className="blog">
                <div className="container">
                    <h3 className="section__title blog__title">Блог</h3>
                    <div className="blog__items">
                        {blogs.map((blog) => {
                            return (
                                <BlogItem
                                    title={blog.title}
                                    img={blog.img}
                                    date={blog.date}
                                    key={blog.id}
                                />
                            )
                        })}
                    </div>
                </div>
            </section>


        </>
     );
}
 
export default MainPage;