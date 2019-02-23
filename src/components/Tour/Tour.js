import React, { Component } from 'react'
import './Tour.scss';

class Tour extends Component {
  state = {
    showInfo: false
  }


  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    })
  }
  render() {

    const { id, city, img, name, info } = this.props.tourProp;
    const { deleteTourProp } = this.props;

    return (
      <article className="tour">
        <div className="img-container">
          <img width="200" src={img} alt="" />
          <span className="close-btn" onClick={() => deleteTourProp(id)}>
            <i className="fas fa-times fa-2x"></i>
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>info <span onClick={this.handleInfo}><i className="fas fa-caret-square-down"></i></span></h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    )
  }
}

export default Tour;