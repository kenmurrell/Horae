import React from 'react';
import Titles from "./components/Titles.js";
import Form from "./components/Form.js";
import Weather from "./components/Weather.js";

const KEY = "6debf71ed2452bcda9b9622d53da941c";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    wind: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
    if(city && country){
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        description: data.weather[0].description,
        error:""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        wind: undefined,
        description: undefined,
        error: "Please enter a city and country"
      });
    }

  }
  render() {
    return (
      <div>
        <div className="main-background">
          <div className="main-container">
            <div className="col-xs-5 title-background">
              <div className="title-container">
                <Titles />
              </div>
            </div>
            <div className="col-xs-7 form-background">
              <div className="form-container">
                <div className="input-form-container">
                  <Form getWeather={this.getWeather}/>
                </div>
                <div className="output-form-container">
                  <Weather
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  wind={this.state.wind}
                  description={this.state.description}
                  error={this.state.error} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
