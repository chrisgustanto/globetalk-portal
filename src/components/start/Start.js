import React, { Component } from 'react';
import { auth, db } from '../../firebase.js';

export default class Start extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        this.props.history.push('/login');
      } 
      // else {
      //   console.log(user.uid)
      //   db.ref('/users/' + user.uid).once('value').then(function(snapshot) {
      //     console.log(snapshot.val().role);
      //   });
      // }
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
