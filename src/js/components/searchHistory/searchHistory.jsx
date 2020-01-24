/* eslint-disable jsx-quotes */
/* eslint-disable linebreak-style */
import React from 'react';
import weather from '../weather';

export default class SearchHistory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { location, history, weatherData } = this.props;
    console.log('w: ', weatherData)
    const searchHistory = history.map((hit) => {
      return (
        <li className="list-group-item" key={hit.time}>
          <div className="row text-center">
            <p className="col-6">{hit.location}</p>
            <p className="col-6">{hit.date}<br />{hit.time}</p>
          </div>
        </li>
      );
    });

    return (
      <div className="col-6">
        <div className="card">
          <div className="card-header list-group-item-info">
            Search History
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              {searchHistory}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
