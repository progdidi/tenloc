import store from './images/appstore.png';
import dev from './images/dev.png';
import google from './images/google.png';
import payment from './images/payment.png';
import logo from './images/logo.png';
import whatsapp from '../../images/social/whatsapp.svg';
import inst from '../../images/social/inst.svg';
import vk from '../../images/social/vk.svg';
import tg from '../../images/social/tg.svg';

import { NavLink } from 'react-router-dom';

import './footer.scss';

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__about">
                        <a href="" className="footer__logo"><img src={logo} alt="" className="logo__img" /></a>
                        <p className="footer__about-text">Скачайте наше преложение</p>
                        <div className="footer__app">
                            <a href="" className="footer__app-link">
                                <img src={store} alt="" className="footer__app-img" />
                                </a>
                            <a href="" className="footer__app-link">
                                <img src={google} alt="" className="footer__app-img" />
                            </a>
                        </div>
                        
                    </div>

                    <ul className="footer__list">
                        <h6 className="footer__list-title">Сервис</h6>
                        <li className="footer__list-item">
                            <NavLink to="/about" className="logo">О сервисе</NavLink>
                        </li>
                        <li className="footer__list-item">
                            <NavLink to="/blog" className="logo">Блог</NavLink>
                        </li>
                        <li className="footer__list-item"><a href="" className="footer__list-link">Часто задаваемые вопросы</a></li>
                        <li className="footer__list-item"><a href="" className="footer__list-link">Способы оплаты</a></li>
                    </ul>
                    <ul className="footer__list">
                        <h6 className="footer__list-title">Гидам</h6>
                        <li className="footer__list-item">
                            <NavLink to="/guide" className="logo">Стать гидом</NavLink>
                        </li>
                        <li className="footer__list-item"><a href="" className="footer__list-link">Правила работы</a></li>
                    </ul>
                    <ul className="footer__list">
                        <h6 className="footer__list-title">Документы</h6>
                        <li className="footer__list-item"><a href="" className="footer__list-link">Политика возврата билетов</a></li>
                        <li className="footer__list-item"><a href="" className="footer__list-link">Договор оферты</a></li>
                        <li className="footer__list-item"><a href="" className="footer__list-link">Условия использования сайта</a></li>
                        <li className="footer__list-item"><a href="" className="footer__list-link">Политика обработки персональных данных</a>
                        </li>
                        <li className="footer__list-item"><a href="" className="footer__list-link">Реквизиты</a></li>
                    </ul>
                    <div className="footer__contacts">
                        <h6 className="footer__list-title">Поддержка клиентов</h6>
                        <ul className="footer__contacts-list">
                            <li className="footer__contacts-item"><a href="" className="footer__contacts-link phone"><span>Телефон:</span> +7 (495) 123-45-67</a></li>
                            <li className="footer__contacts-item"><a href="" className="footer__contacts-link mail"><span>E-mail:</span> hello@trevelme.ru</a></li>
                            <li className="footer__contacts-item"><a href="" className="footer__contacts-link location"><span>Офис:</span> Москва, ул. Название улицы 10, офис 11</a></li>
                        </ul>

                        <div className="social__items">
                            <a href="" className="social__item-link">
                                <img src={whatsapp} alt="" className="social__item-img" />
                            </a>
                            <a href="" className="social__item-link">
                                <img src={tg} alt="" className="social__item-img" />
                            </a>
                            <a href="" className="social__item-link">
                                <img src={vk} alt="" className="social__item-img" />
                            </a>
                            <a href="" className="social__item-link">
                                <img src={inst} alt="" className="social__item-img" />
                            </a>
                        </div>
                        
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__bottom-text">© 2023 «Tenloc».</p>
                    <img src={payment} alt="" className="footer__bottom-img payment" />
                    <div className="footer__bottom-dev">
                        <p className="footer__bottom-text">Разработка сайта</p>
                        <img src={dev} alt="" className="footer__bottom-img" />
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;