import Counter from "../../counter/Counter";

import './detailItem.scss';

const DetailItem = ({detail, price}) => {
    return ( 
        <div className="details__item">
            <p className="details__item-name">{detail}</p>
            <p className="details__item-price">{price}</p>
            <Counter/>
        </div>
     );
}
 
export default DetailItem;