import React, { Component } from 'react';
import { auth } from '../../firebase.js';

import './Login.css';
import '../../index.css';
import { NotificationManager } from 'react-notifications';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email, password, } = this.state;
    auth.signInWithEmailAndPassword(email, password).then(() => {
      this.setState(() => ({ ...INITIAL_STATE }));
      this.props.history.push('/start');
    }).catch((error) => {
      this.setState({ 'error': error });
      NotificationManager.error(error.message, '', 3000);
    });
    event.preventDefault();
  }

  render() {
    const { email, password } = this.state;
    const isInvalid = password === '' || email === '';

    return (
      <div className="login">

        <div className="text-center" id="loginText">
          <h3> ENTER GLOBETALK </h3>
        </div>
        <form onSubmit={this.onSubmit} id="loginForm" className="row">

          <div className="col-sm-6">
            <label className="username">Email</label>
            <input type="email" id="username" className="form-control" value={email}
              onChange={event => this.setState({ 'email': event.target.value })} />
          </div>

          <div className="col-sm-6">
            <label className="password">Password</label>
            <input type="password" id="password" className="form-control" value={password}
              onChange={event => this.setState({ 'password': event.target.value })} />
          </div>

          <div className="col-sm-6 text-center">
            <button type="submit" className="btn btn-sm btn-danger" disabled={isInvalid}> Login </button>
          </div>

        </form>
      </div>
    )
  }
}
