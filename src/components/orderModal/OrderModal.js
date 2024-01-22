import OrderModalItem from "./orderModalItem/OrderModalItem";
import { orders } from "../../helpers/orders/orders";

const OrderModal = () => {
    return ( 
        <div className="modal order-modal">
            <button className="modal-close__btn">x</button>
            <h5 className="order-modal__title">Оформление заказа</h5>

            <table className="order-modal__info">
               {orders.map((order) => {
                return (
                    <OrderModalItem
                        key={order.id}
                        name={order.name}
                        amount={order.amount}
                        date={order.date}
                        img={order.img}
                        price={order.price}
                    />
                )
               })}
            </table>

            <div className="order-modal__payment"></div>
        </div>
     );
}
 
export default OrderModal;