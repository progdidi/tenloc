import { NavLink } from "react-router-dom";
import { useState } from "react";

import arr from '../images/arr.svg';

const DirectionMenu = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false);

    
    return ( 

        <li className="menu__list-item direction" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>
            <button className="menu__list-link">Направления <img src={arr} alt="" className="arr_img" /></button>
            <ul className={isNavExpanded ? "submenu active" : "submenu"}>
                <li className="submenu__item">
                    <NavLink to="/city" className="menu__list-link">Дубай</NavLink>
                </li>
                <li className="submenu__item">
                    <NavLink to="/city" className="menu__list-link">Стамбул</NavLink>
                </li>
                <li className="submenu__item">
                    <NavLink to="/city" className="menu__list-link">Санкт-Петербург</NavLink>
                </li>
                <li className="submenu__item">
                    <NavLink to="/city" className="menu__list-link">Карелия</NavLink>
                </li>
                <li className="submenu__item">
                    <NavLink to="/city" className="menu__list-link">Калининград</NavLink>
                </li>
                <li className="submenu__item">
                    <NavLink to="/city" className="menu__list-link">Мурманск</NavLink>
                </li>
            </ul>
        </li>
        
     );
}
 
export default DirectionMenu;