import { NavLink } from "react-router-dom";
import { useState } from "react";

import arr from '../images/arr.svg';

import './directionMenu.scss';

const DirectionMenu = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false);

    
    return ( 

        <div className="direction" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>
            <button className="direction__btn active list">Направления</button>
            <ul className={isNavExpanded ? "direction-menu active" : "direction-menu"}>
                <li className="direction-menu__item">
                    <NavLink to="/city" className="direction-menu__item-link">Дубай</NavLink>
                </li>
                <li className="direction-menu__item">
                    <NavLink to="/city" className="direction-menu__item-link">Стамбул</NavLink>
                </li>
                <li className="direction-menu__item">
                    <NavLink to="/city" className="direction-menu__item-link">Санкт-Петербург</NavLink>
                </li>
                <li className="direction-menu__item">
                    <NavLink to="/city" className="direction-menu__item-link">Карелия</NavLink>
                </li>
                <li className="direction-menu__item">
                    <NavLink to="/city" className="direction-menu__item-link">Калининград</NavLink>
                </li>
                <li className="direction-menu__item">
                    <NavLink to="/city" className="direction-menu__item-link">Мурманск</NavLink>
                </li>
            </ul>
        </div>
        
     );
}
 
export default DirectionMenu;