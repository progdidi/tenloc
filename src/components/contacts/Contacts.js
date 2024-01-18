//images
import whatsapp from './images/whatsapp.svg';
import tg from './images/telegram.png';
import phone from './images/phone.svg';
import mail from './images/mail.svg';

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

                <a href="tel:+74951234567" className="contacts__link">
                    <img src={phone} alt="" className="contacts__link-img" /> +7 (495) 123-45-67
                </a>
                
                <a href="mail:hello@trevelme.ru" className="contacts__link">
                    <img src={mail} alt="" className="contacts__link-img" /> hello@trevelme.ru
                </a>
            </div>

        </div>
     );
}
 
export default Contacts;