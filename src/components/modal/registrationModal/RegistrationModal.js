import './registrationModal.scss';

const RegistrationModal = ({showRegistration, id="registration"}) => {
    return ( 
        <div className={showRegistration ? "modal active" : "modal"}>
        <div className="modal__overlay">
            <div className="modal__content registration-modal">
                <button className="modal-close__btn">x</button>
                <h4 className="modal__title">Регистрация</h4>

                <div className="modal__form">
                    <input type="text" className="modal__form-input" placeholder="Имя"/>
                    <input type="text" className="modal__form-input" placeholder="Фамилия"/>
                    <input type="text" className="modal__form-input" placeholder="E-mail"/>
                    <input type="text" className="modal__form-input" placeholder="Телефон"/>
                    <input type="text" className="modal__form-input" placeholder="Пароль"/>
                    <input type="text" className="modal__form-input" placeholder="Повторите пароль"/>
                                            
                    <button className="modal__form-btn main-btn">Зарегистрироваться</button>
                    <p className="modal__form-text">Регистрируясь, вы принимаете условия.</p>
                    <p className="modal__form-text">Уже есть аккаунт?</p>
                    <button className="modal__form-btn">Войти</button>
                </div>
            </div>
            
        </div>
    </div>
     );
}
 
export default RegistrationModal;