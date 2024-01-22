import NewsletterSection from '../../components/newsletterSection/NewsletterSection';
import './guidePage.scss';

import offer1 from './images/offer1.svg';
import offer2 from './images/offer2.svg';
import offer3 from './images/offer3.svg';
import offer4 from './images/offer4.svg';

const GuidePage = () => {
    return ( 
        <>
        <section className="guide-page__promo">
            <div className="container">
                <h2 className="guide-page__promo-title page__title">Станьте гидом нашего сервиса</h2>

                <p className="guide-page__promo-text">Trevel Me - это сервис необычных экскурсий от местных жителей.
                Присоединитесь к огромному сообществу гидов, делитесь своими знаниями,
                встречайтесь с интересными людьми и зарабатывайте,
                занимаясь любимым делом!</p>

                <button className="guide-page__promo-btn main-btn">Стать гидом</button>
            </div>
        </section>

        <section className="guide-who">
            <div className="container">
                <h2 className="guide-who__title page__title">Кто может стать гидом</h2>
                <p className="guide-who__text">Мы работаем и с профессиональными гидами, и с влюбленными в город энтузиастами, которые хотят проводить экскурсии. С Трипстером сотрудничают журналисты, историки, архитекторы, искусствоведы и другие харизматичные рассказчики.

                <span>Чтобы стать гидом Trevel Me, важно знать и любить свой город, а также уметь увлечь своими знаниями. В остальном
                мы поможем!</span> </p>
            </div>
        </section>

        <section className="excursion-offer">
            <div className="container">
                <h2 className="excursion-offer__title page__title">Как предложить свою экскурсию</h2>
                <p className="excursion-offer__descr">Каждая экскурсия на Trevel Me — продукт, созданный совместными усилиями гидов и нашей команды.</p>

                <div className="excursion-offer__items">
                    <div className="excursion-offer__item">
                        <img src="" alt="" className="excursion-offer__item-img" />
                        <h6 className="excursion-offer__item-title">Отправьте заявку</h6>
                        <p className="excursion-offer__item-text">Нам важно, чтобы у экскурсии была понятная концепция, через которую вы делитесь своим взглядом на город.</p>
                    </div>
                    <div className="excursion-offer__item">
                        <img src="" alt="" className="excursion-offer__item-img" />
                        <h6 className="excursion-offer__item-title">Ждите ответа</h6>
                        <p className="excursion-offer__item-text">Мы свяжемся с вами, сообщим, подходит ли нам экскурсия, и договоримся о звонке.</p>
                    </div>
                    <div className="excursion-offer__item">
                        <img src="" alt="" className="excursion-offer__item-img" />
                        <h6 className="excursion-offer__item-title">Звонок-знакомство</h6>
                        <p className="excursion-offer__item-text">Созвонимся и обсудим основные идеи, содержание экскурсии и условия сотрудничества.</p>
                    </div>
                    <div className="excursion-offer__item">
                        <img src="" alt="" className="excursion-offer__item-img" />
                        <h6 className="excursion-offer__item-title">Экскурсия на сайте</h6>
                        <p className="excursion-offer__item-text">Мы составим описание так, чтобы экскурсия хорошо продавалась, и разместим предложение на сайте.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="conditions">
            <div className="container">
                <div className="conditions__inner">
                    <h2 className="conditions__title page__title">Условия сотрудничества</h2>
                    <div className="conditions__info">
                        <div className="conditions__item">
                            <p className="conditions__item-num">1</p>
                            <h5 className="conditions__item-title">Размещение на сайте бесплатно</h5>
                            <p className="conditions__item-text">При этом мы выбираем, с какими экскурсиями и гидами работать.
                            Размещаем только предложения, которые отвечают актуальному
                            спросу и в продажи которых верим.</p>
                        </div>
                        <div className="conditions__item">
                            <p className="conditions__item-num">2</p>
                            <h5 className="conditions__item-title">Берем 23% от стоимости каждого заказа</h5>
                            <p className="conditions__item-text">если экскурсия размещена в России или странах ЕС; или же 20%, 
                            если экскурсия размещена в других странах.</p>
                        </div>
                    </div>
                    <div className="conditions__summary">
                        <p className="conditions__summary-main">Мы вкладываем деньги в продвижение, а вы отвечаете за проведение экскурсий</p>
                        <p className="conditions__summary-text">Поэтому мы можем работать только с гидами, которые не отклоняют заказы и быстро отвечают путешественникам</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="registration">
            <div className="container">
                <h4 className="registration__title">Регистрация гида</h4>
                    <form action="" className="registration__form">
                        <input type="text" className="registration__form-input" placeholder='Имя'/>
                        <input type="text" className="registration__form-input" placeholder='Фамилия'/>
                        <input type="text" className="registration__form-input" placeholder='E-mail'/>
                        <input type="text" className="registration__form-input" placeholder='Телефон'/>
                        <input type="text" className="registration__form-input" placeholder='Название Вашей экскурсии'/>
                        <textarea name="" id="" cols="30" rows="10" className="registration__form-text" placeholder='Описание экскурсии'></textarea>
                        <button className="registration__form-btn main-btn">Отправить заявку</button>
                        <p className="registration__form-comment">Отправляя заявку, вы принимаете условия.</p>
                    </form>
            </div>
        </section>

        <NewsletterSection></NewsletterSection>
        </>
     );
}
 
export default GuidePage;