import React, { Component } from 'react'
import './Tour.scss';

class Tour extends Component {
  render() {
    return (
      <article className="tour">
        <div className="img-container">
          <img width="200" src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
          <span className="close-btn">
            <i className="fas fa-times fa-2x"></i>
          </span>
        </div>
        <div className="tour-info">
          <h3>city</h3>
          <h4>name</h4>
          <h5>info <span><i className="fas fa-caret-square-down"></i></span></h5>
          <p>This is just dummy data to show or hide</p>
        </div>
      </article>
    )
  }
}

export default Tour;