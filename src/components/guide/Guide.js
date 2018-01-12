import React, { Component } from 'react';
import './Guide.css';
import { barContent } from './Guide.content.js';

export default class Guide extends Component {
  render() {
    return (
      <div className="guide">
        <h3>CULTURAL EXPLORATION MODULE: FOR STUDENT LEADERS</h3>
        <div id="accordion" role="tablist">
          <h6> GO TO CHAPTER DIRECTORY </h6>
          <div className="card">
            {barContent.map((content, index) => (
              <div>
                <div className="card-header" role="tab" id={"heading" + index}>
                  <h5 className="mb-0">
                    <a data-toggle="collapse" href={"#collapse" + index} role="button"
                      aria-expanded="true" aria-controls={"collapse" + index}> {content.title} </a>
                  </h5>
                </div>
                <div id={"collapse" + index} className="collapse" role="tabpanel" aria-labelledby={"heading" + index} data-parent="#accordion">
                  <div className="card-body">
                    <div className="leftSide">
                      <ul> {content.leftSide.map((leftSideContent) =>
                        <li> {leftSideContent} </li>
                      )} </ul>
                    </div>
                    <div className="rightSide">
                      <ul> {content.rightSide.map((rightSideContent) =>
                        <li> {rightSideContent} </li>
                      )} </ul>
                    </div>

                  </div>
                </div>
              </div>
            ))}</div>
        </div>
      </div>
    )
  }
}
