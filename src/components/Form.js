import React from 'react';



class Form extends React.Component {

  render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="City Name" />
        <input type="text" name="country" placeholder="Country Code" />
        <button﻿>Check Weather</button>
        <div className="radio-container">
        <input id="radio-A" type="radio" name="units" value="metric" defaultChecked />
        <label className="radio-label" htmlFor ="radio-a">Metric</label>
        <input id="radio-B" type="radio" name="units" value="imperial"/>
        <label className="radio-label" htmlFor ="radio-b">Imperial</label>
        </div>
      </form>



    );
  }
}

export default Form;
