import OrderModalItem from "./orderModalItem/OrderModalItem";
import { orders } from "../../helpers/orders/orders";

//images
import card from './images/card.png';
import sber from './images/sber.png';
import yoomoney from './images/yoomoney.png';

//styles
import './orderModal.scss';

const OrderModal = ({showOrder}) => {
    return ( 
        <div className={showOrder ? "modal" : "modal active"}>
            <div className="modal__overlay">
                <div className="modal__content order-modal">
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

                    <div className="order-modal__payment">
                        <h5 className="order-modal__payment-title">Способ оплаты</h5>
                        <p className="order-modal__payment-text">Внесите предоплату. Оставшуюся сумму можно будет заплатить организатору на месте.</p>
                        <div className="payment__items">
                            <button className="payment__item-btn">
                                <img src={card} alt="" className="payment__item-img" />
                                <p className="payment__item-text">Банковской картой</p>
                            </button>

                            <button className="payment__item-btn">
                                <img src={sber} alt="" className="payment__item-img" />
                                <p className="payment__item-text">SberPay</p>
                            </button>

                            <button className="payment__item-btn">
                                <img src={yoomoney} alt="" className="payment__item-img" />
                                <p className="payment__item-text">ЮMoney</p>
                            </button>
                        </div>
                    </div>

                    <form action="" className="order-modal__form">
                        <div className="order-modal__form-main">
                            <label htmlFor="" className="order-modal__form-label"> Как вас зовут
                                <input type="text" className="order-modal__form-input" placeholder="Введите Ваше Имя"/>
                            </label>
                            <label htmlFor="" className="order-modal__form-label"> Контактный телефон
                                <input type="text" className="order-modal__form-input" placeholder="+7 (___) ___ - __ - __"/>
                            </label>

                            <button className="order-modal__form-btn main-btn">Внести предоплату 1 500 ₽</button>
                            <p className="order-modal__form-comment">Оплачивая заказ, Вы соглашаетесь с условиями <a href="" className="link">оферты</a> .</p>
                        </div>

                        <div className="order-modal__form-summ">
                            <table className="order-total">
                                <tr className="order-total__item">
                                    <td className="order-total__item-title">Общая стоимость:</td>
                                    <td className="order-total__item-sum">5 500 ₽</td>
                                </tr>
                                <tr className="order-total__item ">
                                    <td className="order-total__item-title">Оплата на месте: </td>
                                    <td className="order-total__item-sum">4 000 ₽</td>
                                </tr>


                                <tr className="order-total__item summary">
                                    <td className="order-total__item-title">К оплате сейчас: </td>
                                    <td className="order-total__item-sum">1500 ₽</td>
                                </tr>
                            </table>
                        </div>
                        
                    </form>
                </div>
            </div>
            
        </div>
     );
}
 
export default OrderModal;