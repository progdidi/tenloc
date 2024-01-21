import thanks from './thanks.svg';

//styles
import './thanksPage.scss';

const ThanksPage = () => {
    return ( 
        <section className="thanks">
            <div className="container">
                <div className="thanks__inner">
                    <img src={thanks} alt="" className="thanks__img" />
                    <h3 className="thanks__title">Спасибо, что забронировали экскурсию!</h3>
                    <p className="thanks__text">В ближайшее время с Вами свяжется гид.</p>
                </div>
            </div>
            
        </section>
     );
}
 
export default ThanksPage;