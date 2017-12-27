import React, { Component } from 'react';
import { auth } from '../../firebase.js';
import './Login.css';

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
    }).catch((error) => {
      this.setState({ 'error': error });
    });
    event.preventDefault();
  }

  render() {
    const { email, password, error, } = this.state;
    const isInvalid = password === '' || email === '';

    return (
      <div className="login">
        <div className="text-center" id="loginText">
          <h3> ENTER GLOBETALK </h3>
        </div>

        <form onSubmit={this.onSubmit} id="loginForm" className="row">
          
          <div className="col-sm-8">
            <label className="username">Username</label>
            <input type="text" id="username" className="form-control" value={email}
              onChange={event => this.setState({ 'email': event.target.value })} />
          </div>

          <div className="col-sm-8">
            <label className="password">Password</label>
            <input type="password" id="password" className="form-control" value={password}
              onChange={event => this.setState({ 'password': event.target.value })} />
          </div>

          <div className="col-sm-8 text-center">
            <button type="submit" className="btn btn-sm btn-primary" disabled={isInvalid}> Login </button>
          </div>
          
          {error && <p>{error.message}</p>}

        </form>

      </div>
    )
  }
}
