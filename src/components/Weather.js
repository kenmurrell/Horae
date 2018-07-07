import React from 'react';


const Weather = props =>(
  <div>
    { props.city && props.country && <p>Location: {props.city}, {props.country}</p> }
    { props.temperature && props.temp_units && <p>Temperature: {props.temperature} &deg;{props.temp_units} </p> }
    { props.humidity && <p>Humidity: {props.humidity} %</p> }
    { props.wind && props.wind_units && <p>Wind: {props.wind} {props.wind_units} </p> }
    { props.description && <p> Conditions: {props.description}</p> }
  </div>
);

//Weather has no states on only renders stuff, so it doesnt have to be a class component

// class Weather extends React.Component {
//   render() {
//     return (
//       <div>
//         { this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p> }
//         { this.props.temperature && <p>Temperature: {this.props.temperature}</p> }
//         { this.props.humidity && <p>Humidity: {this.props.humidity}</p> }
//         { this.props.description && <p> Conditions: {this.props.description}</p> }
//       </div>
//     );
//   }
// }

export default Weather;
