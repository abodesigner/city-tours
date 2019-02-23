import React, { Component } from 'react'
import './TourList.scss';
import Tour from '../Tour/Tour';
import tourData from '../tourData';

class TourList extends Component {

  state = {
    tours: tourData
  }

  deleteTour = (id) => {
    const { tours } = this.state;
    const sortedTours = tours.filter(tour => tour.id !== id)
    this.setState({
      tours: sortedTours
    })
  }
  render() {

    const { tours } = this.state;

    return (
      <section className="tourlist">
        {
          tours.map(tour => {
            return (<Tour key={tour.id} tourProp={tour} deleteTourProp={this.deleteTour} />)
          })
        }
      </section>
    )
  }
}

export default TourList;