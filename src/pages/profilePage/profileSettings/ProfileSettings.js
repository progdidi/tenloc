import './profileSettings.scss';


const ProfileSettings = ({avatar, mail, phone, id="settings"}) => {
    return ( 
        <div className="settings">

            <img src={avatar} alt="" className="settings__avatar" />

            <div className="settings__info">
                <h5 className="settings__info-title">Контактная информация</h5>
                <table className="settings__info-table">
                    <tr className="settings__info-item">
                        <p className="settings__info-item-data">Электронная почта</p>
                        <a href="" className="settings__info-item-link">{mail}</a>
                        <button className="settings__info-item-btn">Изменить</button>
                    </tr>
                    <tr className="settings__info-item">
                        <p className="settings__info-item-data">Контактный телефон</p>
                        <a href="" className="settings__info-item-link">{phone}</a>
                        <button className="settings__info-item-btn">Изменить</button>
                    </tr>
                </table>
                <p className="settings__info-comment">Ваша контактная информация показывается только после подтверждения бронирования, чтобы с вами можно было связаться.</p>

                <div className="notifications">
                    <h5 className="settings__info-title">Уведомления</h5>
                    <label htmlFor="" className="notifications__input-label">
                        <input type="checkbox" className="notifications__input mail" /> Электронная почта
                    </label>
                    
                    <label htmlFor="" className="notifications__input-label">
                        <input type="checkbox" className="notifications__input phone" /> SMS
                    </label>
                    
                </div>

                <div className="password">
                    <h5 className="settings__info-title">Изменить пароль</h5>
                    <div className="password__items">
                        <input type="text" className="password__input" placeholder="Введите старый пароль"/>
                        <input type="text" className="password__input" placeholder="Введите новый пароль"/>
                        <input type="text" className="password__input" placeholder="Повторите новый пароль"/>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}
 
export default ProfileSettings;