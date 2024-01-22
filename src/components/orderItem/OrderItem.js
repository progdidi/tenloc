import './orderItem.scss';

const OrderItem = ({img, name, city, price, amount, date, currency}) => {
    return ( 
        <tr className="order-item">
            <td className="order-item__data">
                <img src={img} alt="" className="order-item__img" />
            </td>
            <td className="order-item__data">{city}</td>
            <td className="order-item__data">{name}</td>
            <td className="order-item__data">
                <h6 className="order-item__title">Дата и время</h6>
                {date}
            </td>
            <td className="order-item__data">
                <h6 className="order-item__title">Кол-во</h6>
                {amount}
            </td>
            <td className="order-item__data">
                <h6 className="order-item__title">Цена</h6>
                {price} {currency}
            </td>
            <td className="order-item__data">
                <button className="order-item__btn main-btn">Забранировано</button>
            </td>
        </tr>
        
     );
}
 
export default OrderItem;