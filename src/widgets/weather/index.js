import React from "react";
const Api_Key = "e16828cc9474d70f6316405aa0b3a2a2";

class WeatherWidget extends React.Component {
  constructor() {
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    };

    //getWeather is a method we'll use to make the api call
    getWeather = async e => {
      const city = "Dublin";
      const country = "IE";
      e.preventDefault();
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`
      );
      const response = await api_call.json();
      console.log(response);
      if (city && country) {
        this.setState({
          temperature: response.main.temp,
          city: response.name,
          country: response.sys.country,
          humidity: response.main.humidity,
          description: response.weather[0].description,
          error: ""
        });
      } else {
        this.setState({
          error: "Please input search values..."
        });
      }
    };
  }

  render() {
    return (
      <div loadWeather={this.getWeather} className="widget weather fl w-25 pt3 pa2">
        <div className="heading">{this.state.temperature}</div>
        <div className="location">Test location</div>
        <div className="weatherIcon">Weather icon</div>
        <div className="temperature">Temperature</div>
      </div>
    );
  }
}
