import './paddination.scss';

import start from './start.svg';
import end from './end.svg';
import prev from './prev.svg';
import next from './next.svg';

const Paddination = () => {
    return ( 
        <div className="paddination">
            <button className="paddination__btn start">
                <img src={start} alt="" className="paddination__btn-img" />
            </button>
            <button className="paddination__btn prev">
                <img src={prev} alt="" className="paddination__btn-img" />
            </button>
            <ul className="paddination__list">
                <li className="paddination__list-item active"><a href="" className="paddination__list-link">1</a></li>
                <li className="paddination__list-item"><a href="" className="paddination__list-link">2</a></li>
                <li className="paddination__list-item"><a href="" className="paddination__list-link">...</a></li>
                {/* <li className="paddination__list-item"><a href="" className="paddination__list-link">3</a></li>
                <li className="paddination__list-item"><a href="" className="paddination__list-link">4</a></li>
                <li className="paddination__list-item"><a href="" className="paddination__list-link">5</a></li>
                <li className="paddination__list-item"><a href="" className="paddination__list-link">6</a></li>
                <li className="paddination__list-item"><a href="" className="paddination__list-link">7</a></li> */}
                <li className="paddination__list-item"><a href="" className="paddination__list-link">8</a></li>
                <li className="paddination__list-item"><a href="" className="paddination__list-link">9</a></li>
                <li className="paddination__list-item"><a href="" className="paddination__list-link">10</a></li>
            </ul>
            <button className="paddination__btn next">
                <img src={next} alt="" className="paddination__btn-img" />
            </button>
            <button className="paddination__btn end">
                <img src={end} alt="" className="paddination__btn-img" />
            </button>
        </div>
     );
}
 
export default Paddination;