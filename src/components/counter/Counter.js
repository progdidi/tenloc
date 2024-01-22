import './counter.scss';

const Counter = () => {
    return ( 
        <div className="counter">
            <button className="counter__btn minus">-</button>
            <p className="counter__num">1</p>
            <button className="counter__btn minus">+</button>
        </div>
     );
}
 
export default Counter;