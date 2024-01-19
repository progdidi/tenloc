import DirectionItem from "../../components/directionItem/DirectionItem";
import Promo from "../../components/promo/Promo";
import {directions} from "../../helpers/directions/directions";

//styles
import './mainPage.scss';

const MainPage = () => {
    return ( 
        <>
        <Promo></Promo>

        <section className="directions">
            <div className="container">
                <h3 className="section__title directions__title">Популярные направления</h3>
                <div className="directions__text">Проводим индивидуальные и групповые экскурсии на русском языке</div>
                <div className="directions__items">
                    {directions.map((direction) => {
                        return (
                            <DirectionItem
                                key={direction.id}
                                bgImage={direction.img}
                                amount={direction.amount} 
                                direction={direction.direction}
                            />
                        )                            
                    })}
                </div>
            </div>
        </section>
        </>
     );
}
 
export default MainPage;