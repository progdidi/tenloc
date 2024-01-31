import './dateInput.scss';
import Calendar from '../calendar/Calendar';

const DateInput = () => {
    return ( 
        <>
            <form action="" className="date-input__form">
                <input type="text" className="date__input" placeholder='Выберите дату'>
                </input>
                <Calendar/>
            </form>
            
        </>
        
     );
}
 
export default DateInput;