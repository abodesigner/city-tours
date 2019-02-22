import React, { Component } from 'react'
import './TourList.scss';
import Tour from '../Tour/Tour';
import tourData from '../tourData';

class TourList extends Component {

  state = {
    tours: tourData
  }
  render() {
    console.log(this.state.tours);

    return (
      <section className="tourlist">
        <Tour />
      </section>
    )
  }
}

export default TourList;