import React, { Component } from 'react';
import { auth } from '../../firebase.js';

export default class Start extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        this.props.history.push('/login');
      }
    });
  }

  render() {
    return (
      <div className="start">
        Start
      </div>
    )
  }
}
