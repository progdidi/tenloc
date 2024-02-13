import Contacts from "../contacts/Contacts";

//styles
import './promo.scss';

const Promo = () => {
    return ( 
        <section className="promo">
            <div className="container">
                <div className="promo__inner">
                    {/* <Contacts></Contacts> */}

                    <h1 className="promo__title">Поиск и бронирование экскурсий</h1>
                    <p className="promo__text">Экскурсии и частные гиды в России и за рубежом</p>

                    <form action="" className="promo__form">
                        <div className="promo__form-field location">
                            <input type="text" className="promo__form-input" placeholder="Выберите направление"/>
                        </div>

                        <div className="promo__form-field date">
                            <input type="text" className="promo__form-input" placeholder="Дата"/>
                        </div>
                        
                        <button className="promo__form-btn main-btn">Найти</button>
                    </form>

                    <div className="promo__prompts">
                        <p className="promo__prompts-text">
                            Часто ищут:
                        </p>
                        <div className="promo__prompts-items">
                            <button className="promo__prompt">Дубай</button>
                            <button className="promo__prompt">Стамбул</button>
                            <button className="promo__prompt">Санкт-петербург</button>
                            <button className="promo__prompt">Казань</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Promo;