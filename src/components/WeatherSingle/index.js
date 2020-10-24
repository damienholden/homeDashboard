import React from "react";

const request = require("request");
var cityName = "";
var request_url;
const OPEN_WEATHER_API = "e16828cc9474d70f6316405aa0b3a2a2"; //get Openweather api from https://openweathermap.org/api

const getWeather = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          setRequestUrl(
            `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${OPEN_WEATHER_API}&units=metric`
          );
        },
        function(error) {
          setRequestUrl(
            `https://api.openweathermap.org/data/2.5/forecast?id=2964574&appid=${OPEN_WEATHER_API}&units=metric`
          );
        }
      );
    } else {
      // Set the default Location to Dublin
      setRequestUrl(
        `https://api.openweathermap.org/data/2.5/forecast?id=2964574&appid=${OPEN_WEATHER_API}&units=metric`
      );
    }
    //TODO: Find an efficient way of sending a request for the weather on every page reload. Maybe session storage that gets cleared every day and sends a new request the following day?
    const request_URL = sessionStorage.getItem("request_url");
    http: request.get(request_URL, (err, resp, body) => {
      if (err) reject(err);
      let data = JSON.parse(body);
      let response = [data];
      cityName = data.name;
      console.log(cityName);
      resolve(response);
    });
  });

  function setRequestUrl(url) {
    sessionStorage.setItem("request_url", url);
  }
};

export class WeatherWidgetSingle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: [],
    };
  }

  componentDidMount() {
    this.mounted = true;
    if (this.mounted) {
      getWeather()
        .then((weatherData) => {
          console.log(weatherData);
          weatherData.map((day) => {
            const dayObj = {
              day: new Date(day.dt_txt).getDay() - 1,
              temp: day.main.temp,
              icon: day.weather[0].icon,
            };
            this.setState({
              arr: this.state.weather.push(dayObj),
            });
          });
        })
        .catch((error) => {
          console.log(`Encountered error: `, error);
        });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const weatherData = this.state.weather;
    return (
      <div className="widget weatherSingle fl-ns w-90 w-auto-ns ma3-ns mt4 pa1 center tc">
        {weatherData.map((day, index) => (
          <div className="group" key={index}>
            <div className="heading">{cityName}</div>
            <div className="group-content">
              <img
                src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`}
              />
            </div>

            <div className="temp">{Math.round(day.temp)}°</div>
          </div>
        ))}
      </div>
    );
  }
}
