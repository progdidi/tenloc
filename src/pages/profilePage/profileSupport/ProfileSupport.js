import './profileSupport.scss';

const ProfileSupport = () => {
    return ( 
        <div className="support">
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
     );
}
 
export default ProfileSupport;