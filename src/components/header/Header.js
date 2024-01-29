import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import LoginModal from '../modal/loginModal/LoginModal';
import Modal from '../modal/Modal';


//images
import fav from './images/fav.svg';
import logo from './images/logo.png';
import arr from './images/arr.svg';

import './header.scss';

const Header = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [isLoginOpen, setLoginOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);



    return ( 
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <NavLink to="/" className="logo"><img src={logo} alt="" className="logo__img" /></NavLink>

                    <nav className="menu">
                        <ul className={isMobileMenuOpen ? "menu__list" : "menu__list active"}>
                            <li className="menu__list-item direction" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>
                                <button className="menu__list-link">Направления <img src={arr} alt="" className="arr_img" /></button>
                                <ul className={isNavExpanded ? "submenu" : "submenu active"}>
                                    <li className="submenu__item">
                                        <NavLink to="/excursion" className="menu__list-link">Дубай</NavLink>
                                    </li>
                                    <li className="submenu__item">
                                        <NavLink to="/excursion" className="menu__list-link">Стамбул</NavLink>
                                    </li>
                                    <li className="submenu__item">
                                        <NavLink to="/excursion" className="menu__list-link">Санкт-Петербург</NavLink>
                                    </li>
                                    <li className="submenu__item">
                                        <NavLink to="/excursion" className="menu__list-link">Карелия</NavLink>
                                    </li>
                                    <li className="submenu__item">
                                        <NavLink to="/excursion" className="menu__list-link">Калининград</NavLink>
                                    </li>
                                    <li className="submenu__item">
                                        <NavLink to="/excursion" className="menu__list-link">Мурманск</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu__list-item">
                                <NavLink to="/about" className="menu__list-link">О сервисе</NavLink>
                            </li>
                            <li className="menu__list-item">
                                <NavLink to="/blog" className="menu__list-link">Блог</NavLink>
                                
                            </li>
                            <li className="menu__list-item">
                                <a href="" className="menu__list-link">Помощь клиентам<img src={arr} alt="" className="arr_img" /></a>
                            </li>
                        </ul>
                    </nav>

                    <button className="menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <div className="header__buttons">
                        <button className="header-btn fav" onClick={() => setIsModalOpen(true)}>
                            <img src={fav} alt="" className="header-btn__img" />
                        </button>
                        <button className="header-btn login" onClick={() => {setLoginOpen(!isLoginOpen)}}>Войти</button>
                    </div>
                </div>
            </div>

            <Modal isOpen={isModalOpen} />

            <LoginModal showLogin={isLoginOpen}/>
        </header>
     );
}
 
export default Header;