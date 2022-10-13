import moment from 'moment';
import './style.css';

const WeatherItem=(props)=>{
return(
    //второй сп-б достать пропсы
    <ul className='one-day'>
        <ul className='date-time'>
            <li className='day-date'>{moment(props.dt*1000).format('DD.MM.YYYY')}</li>
            <li className='day-time'>{moment(props.dt*1000).format('HH:MM')}</li>
        </ul>
        <li className='date-icon'>
            <img src={'http://openweathermap.org/img/w/' +props.weather[0].icon +'.png'} alt='icon'/>
        </li>
        <li className='day-temp'>
            {Math.floor(props.main.temp - 273, 15) + " °C"}
        </li>
    </ul>
)
}


export default WeatherItem;