import React from "react";
import axios from "axios";
//axios- библ-ка для запросов на сервер
import WeatherToday from "./components/WeatherToday";
import WeatherOthers from "./components/WeatherOthers";

const url =
  "https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247";
class WeatherApp extends React.Component {
  state = {
    weather: null,
  };

  componentDidMount() {
    axios.get(`${url}`).then((response) => {
      const weather = response.data;
      console.log(weather);
      this.setState({ weather }); // если наз ключа совпадает, то м не рассписыва
    });
  }
  render() {
    const { weather } = this.state;
    if (!weather) {
      return <div>Загрузка</div>;
    }
    return (
      <>
        <WeatherToday weather={weather} />
        <WeatherOthers weather={weather} />
      </>
    );
  }
}

export default WeatherApp;
