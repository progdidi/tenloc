import './mobileMenu.scss';

import logo from '../images/logo.png';

//components
import Contacts from '../../contacts/Contacts';
import DirectionMenu from '../directionMenu/DirectionMenu';
import SearchForm from '../../searchForm/SearchForm';
import { NavLink } from 'react-router-dom';
import Login from '../login/Login';



const MobileMenu = ({showMobile}) => {
   
    return ( 
        <div className={showMobile ? "mobile-menu active" : "mobile-menu"}>
            <div className="mobile-menu__top">
                <a href="" className="logo"><img src={logo} alt="" className="logo__img" /></a>


                <button className="mobile-menu__btn" onClick={() => !showMobile}>X</button>
            </div>

            <div className="mobile-menu__buttons">
                <DirectionMenu/>
                <Login/>
                <SearchForm/>
            </div>


            <nav className="menu">
                <ul className="menu__list">
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