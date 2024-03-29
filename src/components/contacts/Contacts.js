//images
import whatsapp from './images/whatsapp.svg';
import tg from './images/telegram.png';

//styles
import './contacts.scss';


const Contacts = () => {
    return ( 
        <div className="contacts">
            <p className="contacts__text">Мы на связи с 09:00 до 21:00 мск</p>
            <div className="contacts__links">
                <a href="#" className="contacts__btn whatsapp">
                    <img src={whatsapp} alt="" className="contacts__link-img" />WhatsApp
                </a>
                <a href="#" className="contacts__btn tg">
                    <img src={tg} alt="" className="contacts__link-img" />Telegram
                </a>

                <a href="tel:+74951234567" className="contacts__link phone"> +7 (495) 123-45-67
                </a>
                
                <a href="mail:hello@trevelme.ru" className="contacts__link mail"> hello@trevelme.ru
                </a>
            </div>

        </div>
     );
}
 
export default Contacts;