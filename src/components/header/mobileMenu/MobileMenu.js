import './mobileMenu.scss';

//components
import Contacts from '../../contacts/Contacts';
import DirectionMenu from '../directionMenu/DirectionMenu';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';



const MobileMenu = ({showMobile}) => {
   
    return ( 
        <div className={showMobile ? "mobile-menu active" : "mobile-menu"}>
            <button className="mobile-menu__btn" onClick={() => !showMobile}>X</button>
            <DirectionMenu/>

            <nav className="menu">
                <ul className="menu__list active">
                    <li className="menu__list-item">
                        <NavLink to="/about" className="menu__list-link">О сервисе</NavLink>
                    </li>
                    <li className="menu__list-item">
                        <NavLink to="/blog" className="menu__list-link">Блог</NavLink>
                        
                    </li>
                    <li className="menu__list-item">
                        <NavLink to="/error" className="menu__list-link">Партнерская программа</NavLink>
                    </li>
                </ul>
            </nav>


            <Contacts/>

        </div>
     );
}
 
export default MobileMenu;