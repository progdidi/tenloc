import './loginModal.scss';
import Modal from '../Modal';
import { useState } from 'react';

const LoginModal = () => {

    const [showRegistration, setShowRegistration] = useState(false);



    return ( 
        <>
            <div className="login-modal">
                <h4 className="modal__title">Вход</h4>

                <div className="modal__form">
                    <input type="text" className="modal__form-input" placeholder="Телефон или почта"/>
                    <input type="text" className="modal__form-input" placeholder="Пароль"/>
                    <div className="modal__form-password">
                        <label htmlFor="" className="input__form-label">
                            <input type="checkbox" className="modal__form-checkbox" /> Запомнить пароль
                        </label>
                        <button className="password-btn">Забыли пароль?</button>
                    </div>                        
                    <button className="modal__form-btn main-btn">Войти</button>
                    <p className="modal__form-text">Еще нет аккаунта?</p>
                    <button className="modal__form-btn" onClick={() => setShowRegistration(true)}>Зарегестрироваться</button>
                    <Modal showModal={showRegistration} setShowModal={setShowRegistration} activeModal="registration"/>
                </div>
            </div>
            
        </>
        
     );
}
 
export default LoginModal;