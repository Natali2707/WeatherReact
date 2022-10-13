import WeatherItem from './WeatherItem';
import './style.css';

const WeatherOthers=(props)=>{
const {weather}=props;

const list =weather.list.filter((day, index)=>index % 8 ===0 );//фильтр забирает кажд 8-й, в листе лежит выборка каждого 8. Нужно писать приним в кач парам 3 арг-та (, индекс,весь массив)
const days= list.map(day=><WeatherItem key={day.dt} {...day}/>)

return(
    <div className='block-days'>
        <div className='container'>
            <div className='flex-container-2'>
                {days}
            </div>
        </div>
    </div>
)
}

export default WeatherOthers;