import './userAccount.scss';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const UserAccount = ({showUser, img, name, id}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return ( 
        <div className={showUser ? "user logged" : "user"}>
            <div className="user-info" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <div className="user-info__img"></div>
                <p className="user-info__name">Иванов</p>
            </div>
            <div className={isMenuOpen ? "user-menu show" : "user-menu"}>
                <ul className="user-menu__list">
                    <li className="user-menu__list-item"><NavLink to="/profile" className="user-menu__list-link">Мои заказы</NavLink></li>
                    <li className="user-menu__list-item"><NavLink to="/profile" className="user-menu__list-link">Настройки профиля</NavLink></li>
                    <li className="user-menu__list-item"><NavLink to="/profile" className="user-menu__list-link">Поддержка</NavLink></li>
                </ul>
            </div>
        </div>
     );
}
 
export default UserAccount;