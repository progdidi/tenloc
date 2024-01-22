import Counter from "../../counter/Counter";

import './orderModalItem.scss';

const OrderModalItem = ({img, name, price, amount, date}) => {
    return ( 
        <tr className="order-modal__item">
            <td className="order-modal__item-data img">
                <img src={img} alt="" className="order-modal__item-img" />
            </td>
            <td className="order-modal__item-data name">{name}</td>
            <td className="order-modal__item-data date">
                <h6 className="order-modal__item-title">Дата и время</h6>
                {date}
            </td>
            <td className="order-modal__item-data price">
                {price}
            </td>
            <td className="order-modal__item-data amount">
                <Counter/>
            </td>
        </tr>
     );
}
 
export default OrderModalItem;