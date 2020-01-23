/* eslint-disable jsx-quotes */
import React from 'react';
import SelectLocation from './components/selectLocation';
import Weather from './components/weather';
import SearchHistory from './components/searchHistory';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className="row justify-content-center">
          <div className="jumbotron bg-dark">
            <h1 className="display-4 text-info font-weight-bold">Very Accurate Weather App</h1>
            <p className="lead text-white">Know the weather more accurately than everyone else!</p>
          </div>
        </div>
        <SelectLocation />
        <div className="row">
          <Weather />
          <SearchHistory />
        </div>
      </div>
    );
  }
}
