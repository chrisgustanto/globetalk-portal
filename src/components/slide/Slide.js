import React, { Component } from 'react';
import { slideContent } from './Slide.content.js';
import './Slide.css';

export default class Slide extends Component {
  render() {
    return (
      <div className="slide">
        <div id="carouselExampleIndicators" className="carousel slide" data-interval="false">
          <ol className="carousel-indicators">
            {slideContent.map((content, index) => (
              <li data-target="#carouselExampleIndicators" data-slide-to={index} className={index == 0 ? "active" : ""}></li>
            ))}
          </ol>
          <div className="carousel-inner" role="listbox">
            {slideContent.map((content, index) => (

              <div className={"carousel-item" + (index == 0 ? " active" : "")}>
                <div className="carousel-left">
                  <h5>{content.title}</h5>
                  <p> {content.description} </p>
                </div>
                <div className="carousel-right">
                  <img src={require('./img/class.jpg')}/>
                </div>

              </div>
          ))}
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    )
  }
}
