import './directionItem.scss';
import { NavLink } from 'react-router-dom';

const DirectionItem = ({bgImage, amount, direction}) => {
    return ( 
        <NavLink to="/city" className="direction__item" style={{ backgroundImage: `url(${bgImage})`}}>
            <h5 className="direction__item-title">{direction}</h5>
            <a href="" className="direction__item-link main-btn">{amount} экскурсий</a>
        </NavLink>
     );
}
 
export default DirectionItem;