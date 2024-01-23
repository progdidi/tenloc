import './basket.scss';
import basket from './basket.svg';
import OrderModal from '../orderModal/OrderModal';
import { useState } from 'react';

const Basket = () => {

    const [isOrderOpen, setIsOrderOpen] = useState(false);

    return ( 
        <>
            <div className="basket">
                <button className="basket__btn" onClick={() => setIsOrderOpen(!isOrderOpen)}>
                    <img src={basket} alt="" className="basket__btn-img" />
                </button>
                <p className="basket__text">в корзине</p>
                <p className="basket__amount">3 экскурсии</p>
            </div>

            <OrderModal showOrder={isOrderOpen}/>
        </>
        
     );
}
 
export default Basket;