import './userAccount.scss';
import { useState } from 'react';

const UserAccount = ({showUser}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return ( 
        <div className={showUser ? "user" : "user logged"}>
            <div className="user-info" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <div className="user-info__img"></div>
                <p className="user-info__name">Иванов</p>
            </div>
            <div className={isMenuOpen ? "user-menu show" : "user-menu"}>
                <ul className="user-menu__list">
                    <li className="user-menu__list-item"><a href="" className="user-menu__list-link">Мои заказы</a></li>
                    <li className="user-menu__list-item"><a href="" className="user-menu__list-link">Настройки профиля</a></li>
                    <li className="user-menu__list-item"><a href="" className="user-menu__list-link">Поддержка</a></li>
                </ul>
            </div>
        </div>
     );
}
 
export default UserAccount;