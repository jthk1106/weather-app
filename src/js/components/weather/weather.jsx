/* eslint-disable jsx-quotes */
/* eslint-disable linebreak-style */
import React from 'react';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { location, temperature } = this.props;
    console.log('temperature: ', temperature)

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
                <p className="text-center font-weight-bold text-success">{ temperature === '' ? '--' : temperature }</p>
              </span>
              <span className="col-4">
                <p className="text-center font-weight-bold">Pressure</p>
                <p className="text-center font-weight-bold text-success">--</p>
              </span>
              <span className="col-4">
                <p className="text-center font-weight-bold">Humidity</p>
                <p className="text-center font-weight-bold text-success">--</p>
              </span>
              <span className="col-4 text-center">
                <p className="text-center font-weight-bold">Lowest Temp</p>
                <p className="text-center font-weight-bold text-success">--</p>
              </span>
              <span className="col-4">
                <p className="text-center font-weight-bold">Highest Temp</p>
                <p className="text-center font-weight-bold text-success">--</p>
              </span>
              <span className="col-4">
                <p className="text-center font-weight-bold">Wind Speed</p>
                <p className="text-center font-weight-bold text-success">--</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
