import './directionItem.scss';

const DirectionItem = ({bgImage, amount, direction}) => {
    return ( 
        <div className="direction__item" style={{ backgroundImage: `url(${bgImage})`}}>
            <h5 className="direction__item-title">{direction}</h5>
            <a href="" className="direction__item-link main-btn">{amount} экскурсий</a>
        </div>
     );
}
 
export default DirectionItem;