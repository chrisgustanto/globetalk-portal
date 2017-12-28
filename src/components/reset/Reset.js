import React, { Component } from 'react';
import { auth } from '../../firebase.js';
import './Reset.css';
import Footer from '../footer/Footer.js'
import { NotificationManager } from 'react-notifications';

const INITIAL_STATE = {
  email: '',
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email, } = this.state;
    console.log(email);
    auth.sendPasswordResetEmail(email).then(() => {
      this.setState(() => ({ ...INITIAL_STATE }));
      NotificationManager.success('Password Reset Email Sent', '', 3000);
    }).catch((error) => {
      this.setState({ 'error': error });
      NotificationManager.error(error.message, '', 3000);
    });
    event.preventDefault();
  }

  render() {
    const { email, } = this.state;
    const isInvalid = email === '';

    return (
      <div className="login">

        <div className="text-center" id="loginText">
          <h3> ENTER GLOBETALK </h3>
        </div>
        <form onSubmit={this.onSubmit} id="loginForm" className="row">

          <div className="col-sm-6">
            <label className="email">Email</label>
            <input type="email" id="email" className="form-control" value={email}
              onChange={event => this.setState({ 'email': event.target.value })} />
          </div>

          <div className="col-sm-6 text-center">
            <button type="submit" className="btn btn-sm btn-danger" disabled={isInvalid}> Send Verification Email </button>
          </div>

        </form>

        <Footer />
      </div>
    )
  }
}
