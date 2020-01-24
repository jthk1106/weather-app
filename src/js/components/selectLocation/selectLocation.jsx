/* eslint-disable jsx-quotes */
/* eslint-disable linebreak-style */
import React from 'react';

import {
  selectLocation,
  getWeather
} from './select-actions';

export default class SelectLocation extends React.Component {
  constructor(props) {
    super(props);

    this.handleLocationInput = this.handleLocationInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDefaultSubmit = this.handleDefaultSubmit.bind(this);
  }

  handleLocationInput(e) {
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(selectLocation(value));
  }

  handleSubmit() {
    console.log('handleSubmit runs');
    const { dispatch, location } = this.props;
    console.log('location from handleSubmit: ', location);
    dispatch(getWeather(location));
  }

  handleDefaultSubmit(e) {
    console.log('default location: ', e.target.value);
    const { dispatch } = this.props;
    dispatch(getWeather(e.target.value));
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-outline-info font-weight-bold" value="San Diego" onClick={ this.handleDefaultSubmit }>San Diego</button>
          <button type="button" className="btn btn-outline-info font-weight-bold" value="New York" onClick={ this.handleDefaultSubmit }>New York</button>
          <button type="button" className="btn btn-outline-info font-weight-bold" value="London" onClick={ this.handleDefaultSubmit }>London</button>
          <button type="button" className="btn btn-outline-info font-weight-bold" value="Seoul" onClick={ this.handleDefaultSubmit }>Seoul</button>
        </div>
        <div className="input-group mb-3 col-8">
          <input type="text" className="form-control" placeholder="Location" onChange={ this.handleLocationInput } />
          <div className="input-group-append">
            <button className="btn btn-info" type="button" onClick={ this.handleSubmit }>Go</button>
          </div>
        </div>
      </div>
    );
  }
}
