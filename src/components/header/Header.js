
import { NavLink } from 'react-router-dom';
import { useState } from 'react';


//components
import Modal from '../modal/Modal';
import UserAccount from './userAccount/UserAccount';
import MobileMenu from './mobileMenu/MobileMenu';
import DirectionMenu from './directionMenu/DirectionMenu';
import Login from './login/Login';


//images
import fav from './images/fav.svg';
import logo from './images/logo.png';

//styles
import './header.scss';


const Header = () => {
    
    const [showMobile, setShowMobile] = useState(false);

    return ( 
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <NavLink to="/" className="logo"><img src={logo} alt="" className="logo__img" /></NavLink>

                    <nav className="menu">
                        <ul className="menu__list">

                            <DirectionMenu/>
                            
                            <li className="menu__list-item">
                                <NavLink to="/about" className="menu__list-link">О сервисе</NavLink>
                            </li>
                            <li className="menu__list-item">
                                <NavLink to="/blog" className="menu__list-link">Блог</NavLink>
                                
                            </li>
                            <li className="menu__list-item">
                                <NavLink to="/error" className="menu__list-link list">Помощь клиентам</NavLink>
                            </li>
                        </ul>
                    </nav>

                    <button className="menu-btn" onClick={() => setShowMobile(!showMobile)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>


                    <MobileMenu showMobile={showMobile} setShowModal={setShowMobile}/>

                    <div className="header__buttons">
                        <button className="header-btn fav">
                            <img src={fav} alt="" className="header-btn__img" />
                        </button>

                        <Login/>
                       
                    </div>
                </div>
            </div>

        </header>
     );
}
 
export default Header;