// @flow
import React, { Component } from 'react';

export default class Home extends Component {

  render() {
    return (
      <div className="row">
        <div className="col s6">
          <ul className="collection">
            <li className="collection-item avatar">
              <img src="images/yuna.jpg" alt="" className="circle" />
              <span className="title">Title</span>
              <p>First Line
                 Second Linde
              </p>
              <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
            </li>
            <li className="collection-item avatar">
              <i className="material-icons circle">folder</i>
              <span className="title">Title</span>
              <p>First Line
                 Second Line
              </p>
              <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
            </li>
            <li className="collection-item avatar">
              <i className="material-icons circle green">insert_chart</i>
              <span className="title">Title</span>
              <p>First Line
                 Second Line
              </p>
              <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
            </li>
            <li className="collection-item avatar">
              <i className="material-icons circle red">play_arrow</i>
              <span className="title">Title</span>
              <p>First Line
                 Second Line
              </p>
              <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
            </li>
          </ul>
        </div>
        <div className="col s6">
          hello
        </div>
      </div>
    );
  }
}
