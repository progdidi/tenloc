import './loginModal.scss';
import RegistrationModal from '../registrationModal/RegistrationModal';
import { useState } from 'react';

const LoginModal = ({showLogin}) => {

    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)


    return ( 
        <>
            <div className={showLogin? "modal active" : "modal"}>
                <div className="modal__overlay">
                    <div className="modal__content login-modal">
                        <button className="modal-close__btn">x</button>
                        <h4 className="modal__title">Вход</h4>

                        <div className="modal__form">
                            <input type="text" className="modal__form-input" placeholder="Телефон или почта"/>
                            <input type="text" className="modal__form-input" placeholder="Пароль"/>
                            <div className="modal__form-password">
                                <label htmlFor="" className="input__form-label">
                                    <input type="checkbox" className="modal__form-input" /> Запомнить пароль
                                </label>
                                <button className="password-btn">Забыли пароль?</button>
                            </div>                        
                            <button className="modal__form-btn main-btn">Войти</button>
                            <p className="modal__form-text">Еще нет аккаунта?</p>
                            <button className="modal__form-btn" onClick={() => setIsRegistrationOpen(true)}>Зарегестрироваться</button>
                        </div>
                    </div>
                    
                </div>
            </div>

            <RegistrationModal showRegistration={isRegistrationOpen}/>
        </>
        
     );
}
 
export default LoginModal;