//images
import fav from './images/fav.svg';
import logo from './images/logo.png';
import arr from './images/arr.svg';

import './header.scss';

const Header = () => {
    return ( 
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <a href="" className="logo"><img src={logo} alt="" className="logo__img" /></a>

                    <nav className="menu">
                        <ul className="menu__list">
                            <li className="menu__list-item">
                                <a href="" className="menu__list-link">Направления <img src={arr} alt="" className="arr_img" /></a>
                            </li>
                            <li className="menu__list-item">
                                <a href="" className="menu__list-link">О сервисе</a>
                            </li>
                            <li className="menu__list-item">
                                <a href="" className="menu__list-link">Блог</a>
                            </li>
                            <li className="menu__list-item">
                                <a href="" className="menu__list-link">Помощь клиентам<img src={arr} alt="" className="arr_img" /></a>
                            </li>
                        </ul>
                    </nav>

                    <div className="header__buttons">
                        <button className="header-btn fav">
                            <img src={fav} alt="" className="header-btn__img" />
                        </button>
                        <button className="header-btn login">Войти</button>
                    </div>
                </div>
            </div>
        </header>
     );
}
 
export default Header;