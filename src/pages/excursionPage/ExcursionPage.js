//styles
import './excursionPage.scss';

//example images
import ex1 from './images/ex1.png';
import ex2 from './images/ex2.png';
import ex3 from './images/ex3.png';
import ex4 from './images/ex4.png';
import ex5 from './images/ex5.png';

import details from './images/details.svg';

import gal1 from './images/gal1.png';
import gal2 from './images/gal2.png';
import gal3 from './images/gal3.png';
import gal4 from './images/gal4.png';
import gal5 from './images/gal5.png';
import gal6 from './images/gal6.png';

import ExcursionBooking from '../../components/excursionBooking/ExcursionBooking';
import ExcursionSection from '../../components/excursionSection/ExcursionSection';
import Basket from '../../components/basket/Basket';

const ExcursionPage = () => {
    return ( 
        <>
            <section className="excursion">
                <div className="container">
                    <div className="excursion__top">
                        <h3 className="excursion__title">Коллекция Эрмитажа и парадная жизнь Зимнего дворца (со входными билетами)</h3>
                        <p className="excursion__price">от 2750 ₽ <br /> <span>за человека</span> </p>
                    </div>
                    

                    <div className="excursion__slider">
                        <img src={ex1} alt="" className="excursion__slider-img" />
                        <img src={ex2} alt="" className="excursion__slider-img" />
                        <img src={ex3} alt="" className="excursion__slider-img" />
                        <img src={ex4} alt="" className="excursion__slider-img" />
                        <img src={ex5} alt="" className="excursion__slider-img" />
                    </div>

                    <div className="excursion__info">
                        <div className="excursion__content">
                            <p className="excursion__descr">Эрмитаж — это то место, которое стоит посетить в Петербурге. Конечно же, за один день нереально увидеть весь Эрмитаж. Со мной вы прогуляетесь по залам музея, познакомитесь с историей Зимнего дворца и увидите шедевры мастеров прошлого из Западной Европы.</p>

                            <div className="excursion__details">
                                <div className="excursion__details-item">
                                    <img src={details} alt="" className="excursion__details-img" /> Мини группа
                                </div>
                                <div className="excursion__details-item">
                                    <img src={details} alt="" className="excursion__details-img" /> 2 часа
                                </div>
                                <div className="excursion__details-item">
                                    <img src={details} alt="" className="excursion__details-img" /> Размер группы до 10 человек
                                </div>
                                <div className="excursion__details-item">
                                    <img src={details} alt="" className="excursion__details-img" /> Бесплатная отмена за 48 часов
                                </div>
                            </div>

                            <div className="excursion__about">
                                <div className="excursion__about-item">
                                    <h6 className="excursion__about-title">Что включено</h6>
                                    <ul className="excursion__about-list">
                                        <li className="excursion__about-list-item">Входной билет в музей (без очереди), действительный только на день и время, указанные в ваучере;</li>
                                        <li className="excursion__about-list-item">Экскурсия с гидом в мини группе не более 10 человек</li>
                                    </ul>
                                </div>
                                <div className="excursion__about-item">
                                    <h6 className="excursion__about-title">Какие места вы увидите</h6>
                                    <ul className="excursion__about-list">
                                        <li className="excursion__about-list-item">Парадные залы Зимнего дворца</li>
                                        <li className="excursion__about-list-item">Интерьеры Малого, Нового и Старого Эрмитажа</li>
                                        <li className="excursion__about-list-item">Шедевры Западно-Европейского искусства из коллекции Государственного Эрмитажа</li>
                                    </ul>
                                </div>
                                <div className="excursion__about-item">
                                    <h6 className="excursion__about-title">За какой период можно бронировать</h6>
                                    <ul className="excursion__about-list">
                                        <li className="excursion__about-list-item">В календаре вы видите все доступные даты на данную минуту. Бронируйте сейчас, места могут закончиться.</li>
                                    </ul>
                                </div>
                                <div className="excursion__about-item">
                                    <h6 className="excursion__about-title">Как можно оплатить</h6>
                                    <p className="excursion__about-text">Оплата возможна онлайн на сайте или наличными. Все способы будут указаны на странице оплаты после того, как вы выберете дату, время и нажмете "перейти к оформлению".<br></br> <br></br>В зависимости от выбранных даты или времени цена может различаться. Это зависит от условий организаторов. Само предложение при этом остается одинаковым, если нет иных уточнений в поле "что включено"/"что не включено".</p>
                                </div>

                                <p className="excursion__about-descr">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>

                                <p className="excursion__about-descr">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>


                                <div className="excursion__gallery">
                                    <img src={gal1} alt="" className="excursion__gallery-img" />
                                    <img src={gal2} alt="" className="excursion__gallery-img" />
                                    <img src={gal3} alt="" className="excursion__gallery-img" />
                                    <img src={gal4} alt="" className="excursion__gallery-img" />
                                    <img src={gal5} alt="" className="excursion__gallery-img" />
                                    <img src={gal6} alt="" className="excursion__gallery-img" />
                                </div>

                                <p className="excursion__about-descr">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>

                                <p className="excursion__about-descr">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>


                                
                            </div>
                        </div>

                        <ExcursionBooking/>

                        <Basket></Basket>
                    </div>

                </div>
            </section>

            <ExcursionSection/>
        </>
     );
}
 
export default ExcursionPage;