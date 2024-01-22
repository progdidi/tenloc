import './profileSettings.scss';


const ProfileSettings = ({avatar, mail, phone}) => {
    return ( 
        <div className="settings">
            <img src={avatar} alt="" className="settings__avatar" />
            <div className="settings-info">
                <h5 className="settings-info__title">Контактная информация</h5>
                <table className="settings-info__table">
                    <tr className="settings-info__item">
                        <p className="settings-info__item-data">Электронная почта</p>
                        <a href="" className="settings-info__item-link">{mail}</a>
                        <button className="settings-info__btn">Изменить</button>
                    </tr>
                    <tr className="settings-info__item">
                        <p className="settings-info__item-data">Контактный телефон</p>
                        <a href="" className="settings-info__item-link">{phone}</a>
                        <button className="settings-info__btn">Изменить</button>
                    </tr>
                </table>
                <p className="settings-info__comment">Ваша контактная информация показывается только после подтверждения бронирования, чтобы с вами можно было связаться.</p>

                <div className="notifications">
                    <h5 className="settings-info__title">Уведомления</h5>
                    <label htmlFor="" className="notifications__input-label">
                        <input type="checkbox" className="notifications__input mail" /> Электронная почта
                    </label>
                    
                    <label htmlFor="" className="notifications__input-label">
                        <input type="checkbox" className="notifications__input phone" /> SMS
                    </label>
                    
                </div>

                <div className="password">
                    <input type="text" className="password__input" placeholder="Введите старый пароль"/>
                    <input type="text" className="password__input" placeholder="Введите новый пароль"/>
                    <input type="text" className="password__input" placeholder="Повторите новый пароль"/>
                </div>
            </div>
        </div>
     );
}
 
export default ProfileSettings;