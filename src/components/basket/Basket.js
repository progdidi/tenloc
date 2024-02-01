import './basket.scss';
import basket from './basket.svg';
import { useState } from 'react';
import Modal from '../modal/Modal';

const Basket = () => {

    const [showModal, setShowModal] = useState(false);

    return ( 
        <>
            <div className="basket">
                <button className="basket__btn" onClick={() => setShowModal(true)}>
                    <img src={basket} alt="" className="basket__btn-img" />
                </button>
                <p className="basket__text">в корзине</p>
                <p className="basket__amount">3 экскурсии</p>
            </div>

            <Modal showModal={showModal} setShowModal={setShowModal} activeModal="order"/>
        </>
        
     );
}
 
export default Basket;