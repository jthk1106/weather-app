/* eslint-disable jsx-quotes */
/* eslint-disable linebreak-style */
import React from 'react';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { location, weatherData } = this.props;
    console.log('weatherData: ', weatherData);

    return (
      <div className="col-6">
        <div className="card">
          <div className="card-header list-group-item-info">City Information</div>
          <div className="card-body">
            <h2 className="card-title text-center">{ location }</h2>
          </div>
          <div className="card-body">
            <div className="row">
              <span className="col-4">
                <p className="text-center font-weight-bold">Temperature</p>
                <p className="text-center font-weight-bold text-success">{ weatherData === '' ? '--' : weatherData.main.temp }°F</p>
              </span>
              <span className="col-4">
                <p className="text-center font-weight-bold">Pressure</p>
                <p className="text-center font-weight-bold text-success">{ weatherData === '' ? '--' : weatherData.main.pressure }</p>
              </span>
              <span className="col-4">
                <p className="text-center font-weight-bold">Humidity</p>
                <p className="text-center font-weight-bold text-success">{ weatherData === '' ? '--' : weatherData.main.humidity }%</p>
              </span>
              <span className="col-4 text-center">
                <p className="text-center font-weight-bold">Lowest Temp</p>
                <p className="text-center font-weight-bold text-success">{ weatherData === '' ? '--' : weatherData.main.temp_min }°F</p>
              </span>
              <span className="col-4">
                <p className="text-center font-weight-bold">Highest Temp</p>
                <p className="text-center font-weight-bold text-success">{ weatherData === '' ? '--' : weatherData.main.temp_max }°F</p>
              </span>
              <span className="col-4">
                <p className="text-center font-weight-bold">Wind Speed</p>
                <p className="text-center font-weight-bold text-success">{ weatherData === '' ? '--' : weatherData.wind.speed }mph</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
