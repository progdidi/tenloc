import './profilePage.scss';

import { orders } from '../../helpers/orders/orders';
import OrderItem from '../../components/orderItem/OrderItem';


const ProfilePage = () => {
    return ( 
        <>
        <div className="profile">
            <div className="container">
                <div className="profile__tabs">
                    <button className="profile__tab" data-profile="order">Мои заказы</button>
                    <button className="profile__tab" data-profile="settings">Настройки профиля</button>
                    <button className="profile__tab" data-profile="support">Написать в поддержку</button>
                </div>

                <div className="profile__content order">
                    <div className="order__type">
                        <button className="order__type-btn" data-order="all">Все</button>
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
            </div>
        </div>
        </>
     );
}
 
export default ProfilePage;