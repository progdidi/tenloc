import { directions } from "../../../helpers/directions/directions";
import './directionInput.scss';

const DirectionInput = () => {
    return ( 
        <>
            <div className="direction-select__form">
                <select className="direction-select">
                    {
                        directions.map((direction) => {
                            return (
                                <option className="direction-select__item" value={direction.direction}>{direction.direction}</option>
                            )
                        })
                    }
                </select>
            </div>
            
        </>
     );
}
 
export default DirectionInput;