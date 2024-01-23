import './calendar.scss';

import prev from './prev.svg';
import next from './next.svg';

const Calendar = () => {
    return ( 
        <div className="calendar">
            <div className="calendar__inner">
                <div className="calendar__month">
                    <button className="calendar__month-btn prev">
                        <img src={prev} alt="" className="calendar__month-btn-img" />
                    </button>
                    <h5 className="calendar__month-title">Октябрь 2023</h5>
                    <table className="calendar-table">
                        <thead>
                            <tr className="calendar-table__weak">
                                <th className="calendar-table__weak-day">Пн</th>
                                <th className="calendar-table__weak-day">Вт</th>
                                <th className="calendar-table__weak-day">Ср</th>
                                <th className="calendar-table__weak-day">Чт</th>
                                <th className="calendar-table__weak-day">Пт</th>
                                <th className="calendar-table__weak-day">Сб</th>
                                <th className="calendar-table__weak-day">Вс</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            <tr className="calendar-table__days">
                                <td className="calendar-table__day free">1</td>
                                <td className="calendar-table__day reserved">2</td>
                                <td className="calendar-table__day">3</td>
                                <td className="calendar-table__day">4</td>
                                <td className="calendar-table__day">5</td>
                                <td className="calendar-table__day">6</td>
                                <td className="calendar-table__day">7</td>
                            </tr>

                            <tr className="calendar-table__days">
                                <td className="calendar-table__day active">1</td>
                                <td className="calendar-table__day reserved">2</td>
                                <td className="calendar-table__day">3</td>
                                <td className="calendar-table__day">4</td>
                                <td className="calendar-table__day">5</td>
                                <td className="calendar-table__day">6</td>
                                <td className="calendar-table__day">7</td>
                            </tr>

                            <tr className="calendar-table__days">
                                <td className="calendar-table__day active">1</td>
                                <td className="calendar-table__day reserved">2</td>
                                <td className="calendar-table__day">3</td>
                                <td className="calendar-table__day">4</td>
                                <td className="calendar-table__day">5</td>
                                <td className="calendar-table__day">6</td>
                                <td className="calendar-table__day">7</td>
                            </tr>

                            <tr className="calendar-table__days">
                                <td className="calendar-table__day active">1</td>
                                <td className="calendar-table__day reserved">2</td>
                                <td className="calendar-table__day">3</td>
                                <td className="calendar-table__day">4</td>
                                <td className="calendar-table__day">5</td>
                                <td className="calendar-table__day">6</td>
                                <td className="calendar-table__day">7</td>
                            </tr>
                        </tbody>

                        
                    </table>
                </div>

                <div className="calendar__month">
                    <h5 className="calendar__month-title">Октябрь 2023</h5>
                    <button className="calendar__month-btn next">
                        <img src={next} alt="" className="calendar__month-btn-img" />
                    </button>
                    <table className="calendar-table">
                        <thead>
                            <tr className="calendar-table__weak">
                                <th className="calendar-table__weak-day">Пн</th>
                                <th className="calendar-table__weak-day">Вт</th>
                                <th className="calendar-table__weak-day">Ср</th>
                                <th className="calendar-table__weak-day">Чт</th>
                                <th className="calendar-table__weak-day">Пт</th>
                                <th className="calendar-table__weak-day">Сб</th>
                                <th className="calendar-table__weak-day">Вс</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            <tr className="calendar-table__days">
                                <td className="calendar-table__day free">1</td>
                                <td className="calendar-table__day reserved">2</td>
                                <td className="calendar-table__day">3</td>
                                <td className="calendar-table__day">4</td>
                                <td className="calendar-table__day">5</td>
                                <td className="calendar-table__day">6</td>
                                <td className="calendar-table__day">7</td>
                            </tr>

                            <tr className="calendar-table__days">
                                <td className="calendar-table__day active">1</td>
                                <td className="calendar-table__day reserved">2</td>
                                <td className="calendar-table__day">3</td>
                                <td className="calendar-table__day">4</td>
                                <td className="calendar-table__day">5</td>
                                <td className="calendar-table__day">6</td>
                                <td className="calendar-table__day">7</td>
                            </tr>

                            <tr className="calendar-table__days">
                                <td className="calendar-table__day active">1</td>
                                <td className="calendar-table__day reserved">2</td>
                                <td className="calendar-table__day">3</td>
                                <td className="calendar-table__day">4</td>
                                <td className="calendar-table__day">5</td>
                                <td className="calendar-table__day">6</td>
                                <td className="calendar-table__day">7</td>
                            </tr>

                            <tr className="calendar-table__days">
                                <td className="calendar-table__day active">1</td>
                                <td className="calendar-table__day reserved">2</td>
                                <td className="calendar-table__day">3</td>
                                <td className="calendar-table__day">4</td>
                                <td className="calendar-table__day">5</td>
                                <td className="calendar-table__day">6</td>
                                <td className="calendar-table__day">7</td>
                            </tr>
                        </tbody>

                        
                    </table>
                </div>
            </div>
            

            <div className="calendar__details">
                <div className="calendar__details-item">
                    <div className="calendar__details-color reserved"></div>
                    <p className="calendar__details-text">День занят</p>
                </div>
                <div className="calendar__details-item">
                    <div className="calendar__details-color free"></div>
                    <p className="calendar__details-text">День свободен</p>
                </div>
            </div>
        </div>
     );
}
 
export default Calendar;