//styles
import './aboutPage.scss';

//components
import BlogSection from '../../components/blogSection/BlogSection';
import NewsletterSection from '../../components/newsletterSection/NewsletterSection';
import ReviewSection from '../../components/reviewSection/ReviewSection';

//images
import main from './images/main.png';
import adv1 from './images/adv1.svg';
import adv2 from './images/adv2.svg';
import adv3 from './images/adv3.svg';
import how from './images/how.png';

const AboutPage = () => {
    return ( 
        <>
            <section className="about">
                <div className="container">
                    <h2 className="about__title page__title">«Traval Me» — это</h2>
                    <p className="about__text">платформа простого и надежного онлайн бронирования экскурсий на русском языке по всему миру. Был основан в 2012 году в Санкт-Петербурге. В настоящее время является лидером рынка в России и странах бывшего СНГ, занимает одну из лидирующих позиций в мире по данному сегменту. Стал финалистом конкурса «Стартап года 2013», премии «Моя планета», селекционного этапа Y Combinator (бизнес-инкубатор, из которого вышли Airbnb, Dropbox).</p>

                    <img src={main} alt="" className="about__img" />
                </div>
            </section>

            <section className="fast">
                <div className="container">
                    <h2 className="page__title fast__title">Быстро и удобно</h2>
                    <p className="fast__text">Наша  платформа предоставляет возможность выбрать экскурсию по различным критериям: местоположению, тематике, продолжительности и т.д. Кроме того, у нас можно ознакомиться с отзывами других туристов, которые уже посетили данную экскурсию. </p>

                    <p className="fast__text">Бронирование экскурсии через онлайн платформу также удобно тем, что не требует посещения туристического агентства или связывания с гидом напрямую. Все необходимые документы и информация о месте и времени встречи будут отправлены на электронную почту или мобильное устройство.</p>
                </div>
            </section>

            <div className="advantages">
                <div className="container">
                    <div className="advantages__inner">
                        <div className="advantages__item">
                        <div className="advantages__item-main">
                            <img src={adv1} alt="" className="advantages__item-img" />
                            <h5 className="advantages__item-title">Увлеченные гиды</h5>
                        </div>
                        <p className="advantages__item-text">Наши экскурсии проводят увлеченные, общительные люди с большим багажом знаний: историки, архитекторы, журналисты, искусствоведы и другие эксперты.</p>
                        </div>
                        <div className="advantages__item">
                            <div className="advantages__item-main">
                                <img src={adv2} alt="" className="advantages__item-img" />
                                <h5 className="advantages__item-title">Необычные экскурсии</h5>
                            </div>
                            <p className="advantages__item-text">Мы любим необычные экскурсии: с нами вы не только узнаете историю города, но и погуляете по его секретным барам, крышам и галереям современного искусства.</p>
                        </div>
                        <div className="advantages__item">
                            <div className="advantages__item-main">
                                <img src={adv3} alt="" className="advantages__item-img" />
                                <h5 className="advantages__item-title">Только личное общение</h5>
                            </div>
                            <p className="advantages__item-text">Вся магия и яркие впечатления рождаются в личном общении, поэтому мы специально заботимся о качестве экскурсий. Вы не найдете у нас гидов со скучными заученными программами.</p>
                        </div>
                    </div>
                </div>
                
            </div>


            <section className="steps">
                <div className="container">
                    <h2 className="page__title steps__title">Как мы работаем</h2>
                    <div className="steps__inner">
                        <img src={how} alt="" className="steps__img" />
                        <div className="steps__info">
                            <div className="steps__item">
                                <p className="steps__item-num">Шаг 1</p>
                                <div className="steps__item-info">
                                    <h5 className="steps__item-title">Выбирайте экскурсию на сайте</h5>
                                    <p className="steps__item-text">Все экскурсии на сайте авторские, экскурсию проводит человек, который
                                    ее придумал. Вы можете заранее прочитать описание программы, посмотреть, что гид написал о себе, познакомиться с отзывами других путешественников и выбрать экскурсию, которая вам ближе всего.</p>
                                </div>
                            </div>
                            <div className="steps__item">
                                <p className="steps__item-num">Шаг 2</p>
                                <div className="steps__item-info">
                                    <h5 className="steps__item-title">Можно пообщаться с гидом до оплаты</h5>
                                    <p className="steps__item-text">Бронирование происходит через сайт, при этом вы общаетесь напрямую с гидом и можете задать ему любые вопросы. Вам не нужно ничего оплачивать, пока вы не проясните все важные для себя детали.</p>
                                </div>
                            </div>
                            <div className="steps__item">
                                <p className="steps__item-num">Шаг 3</p>
                                <div className="steps__item-info">
                                    <h5 className="steps__item-title">Не нужно платить все деньги сразу</h5>
                                    <p className="steps__item-text">На сайте вы оплачиваете 20-23% стоимости экскурсии, это позволяет гиду забронировать выбранное вами время. Оставшуюся часть стоимости вы оплачиваете гиду на месте после экскурсии.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ReviewSection></ReviewSection>

            <BlogSection></BlogSection>

            <NewsletterSection></NewsletterSection>
        </>
     );
}
 
export default AboutPage;