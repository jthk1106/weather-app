/* eslint-disable jsx-quotes */
/* eslint-disable linebreak-style */
import React from 'react';

export default class SearchHistory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-6">
        <div className="card">
          <div className="card-header list-group-item-info">
            Search History
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="row text-center">
                  <p className="col-6">San Diego</p>
                  <p className="col-6">1/20/20<br />11:19pm</p>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row text-center">
                  <p className="col-6">New York</p>
                  <p className="col-6">1/19/20<br />1:22pm</p>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row text-center">
                  <p className="col-6">San Diego</p>
                  <p className="col-6">1/18/20<br />9:05am</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
