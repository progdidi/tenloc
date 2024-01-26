import './profileOrder.scss';

//components
import OrderItem from '../../../components/orderItem/OrderItem';
import {orders} from '../../../helpers/orders/orders';

const ProfileOrder = ({show}) => {
    return ( 
        <div className={show ? "order active" : "order"}>
            <div className="order__type">
                <button className="order__type-btn active" data-order="all">Все</button>
                <button className="order__type-btn" data-order="active">Активные</button>
                <button className="order__type-btn" data-order="done">Завершенные</button>
            </div>

            <table className="order__info">
                {orders.map((order) => {
                    return (
                        <OrderItem
                            key={order.id}
                            city={order.city}
                            img={order.img}
                            name={order.name}
                            date={order.date}
                            amount={order.amount}
                            price={order.price}
                            currency={order.currency}
                        />
                    )
                })}
            </table>
        </div>
     );
}
 
export default ProfileOrder;