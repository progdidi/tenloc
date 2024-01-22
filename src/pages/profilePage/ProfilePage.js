import './profilePage.scss';

import { orders } from '../../helpers/orders/orders';
import OrderItem from '../../components/orderItem/OrderItem';

import { profileInfo } from '../../helpers/profileInfo/profileInfo';
import ProfileSettings from '../../components/profileSettings/ProfileSettings';


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

                <div className="profile__content settings">
                    {profileInfo.map((profile) => {
                        return (
                            <ProfileSettings
                                key={profile.id}
                                avatar={profile.avatar}
                                mail={profile.mail.address}
                                phone={profile.phone.number}
                            />
                        )
                    })}
                </div>

                <div className="profile__content support">
                    <h5 className="support__title">Запрос в тех поддержку</h5>

                    <form action="" className="support__form">
                        <label htmlFor="" className="support__form-label"> Тема сообщения
                            <input type="text" className="support__form-input" placeholder='Например: не прошла оплата' />
                        </label>
                        <label htmlFor="" className="support__form-label"> Сообщение
                            <textarea name="" id="" cols="30" rows="10" className="support__form-text" placeholder='Опишите Вашу проблему'></textarea>
                        </label>

                        <p className="support__form-comment">Обычно мы отвечаем в течение 24 часов после обработки запроса.</p>
                        <button className="support__form-btn main-btn">Отправить</button>
                    </form>
                </div>

                
            </div>
        </div>
        </>
     );
}
 
export default ProfilePage;