import React, { Component } from "react";
import InputPlaces from "../components/InputPlace";
import Weather from "../components/Weather"
import axios from "axios";

import "./styles.css";

class WeatherApp extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=f532fef104929fb358323bf3d24a6e9f`)
    .then(response => {
      console.log(response)
      this.setState({
        temperature: response.data.main.temp,
        city: response.data.name,
        country: response.data.sys.country,
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description,
        error: ""
      })
    })
    .catch(error => {
      this.setState({
        error: "Place not found"
      })
    })
  };

  render() {
    return( 
    <div className="weatherApp">
    <h1>Weather App </h1><h5>openweathermap api</h5>
    <InputPlaces getWeather={this.getWeather} />
    <Weather temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error} />
    </div>
    );
  }
}

export default WeatherApp;
