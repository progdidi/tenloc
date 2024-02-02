import './dateInput.scss';
import Calendar from '../calendar/Calendar';
import { useState } from 'react';

const DateInput = () => {
    const [showCalendar, setShowCalendar] = useState(false);

    return ( 
        <>
            <form action="" className="date-input__form">
                <input type="text" className="date__input" placeholder='Выберите дату' onClick={() => setShowCalendar(!showCalendar)}>
                </input>
                <Calendar showCalendar={showCalendar}/>
            </form>
            
        </>
        
     );
}
 
export default DateInput;