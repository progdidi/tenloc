import './newsletterSection.scss';

//images
import inst from '../../images/social/inst.svg';
import vk from '../../images/social/vk.svg';
import tg from '../../images/social/tg.svg';

const NewsletterSection = () => {
    return ( 
        <div className="newsletter">
            <div className="container">
                <div className="newsletter__inner">
                    <div className="newsletter__info">
                        <h4 className="newsletter__title">Подпишитесь на нашу рассылку</h4>
                        <p className="newsletter__text">Подписывайтесь на удобный для Вас мессенджер</p>
                        <div className="newsletter__items">
                            <a href="" className="newsletter__link">
                                <img src={inst} alt="" className="newsletter__link-img" /> Instagram
                            </a>
                            <a href="" className="newsletter__link">
                                <img src={tg} alt="" className="newsletter__link-img" /> Telegram
                            </a>
                            <a href="" className="newsletter__link">
                                <img src={vk} alt="" className="newsletter__link-img" /> Vkontakte
                            </a>
                        </div>

                        <p className="newsletter__comment">При переходе в одну из указанных социальных сетей, вы автоматически соглашаетесь с политикой конфидециальности</p>
                    </div>
                    
                </div>
            </div>
            
        </div>
     );
}
 
export default NewsletterSection;