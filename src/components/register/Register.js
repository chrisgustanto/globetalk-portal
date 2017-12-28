import React, { Component } from 'react';
import { auth } from '../../firebase.js';
import './Register.css';
import Footer from '../footer/Footer.js'
import { NotificationManager } from 'react-notifications';

const INITIAL_STATE = {
  email: '',
  password: '',
  passwordConfirmation: '',
  error: null,
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email, password } = this.state;
    auth.createUserWithEmailAndPassword(email, password).then((user) => {
      this.setState(() => ({ ...INITIAL_STATE }));
      this.sendVerificationEmail(user);
      event.preventDefault();
    }).catch((error) => {
      this.setState({ 'error': error });
      event.preventDefault();
      NotificationManager.error(error.message, '', 3000);

    });
  }

  sendVerificationEmail(user) {
    user.sendEmailVerification().then(() => {
    }).catch((error) => {
      console.log(error);
    })
  }

  render() {
    const { email, password, error, passwordConfirmation } = this.state;
    const isInvalid = password === '' || email === '' || password !== passwordConfirmation;
    const passwordsMatch = password === passwordConfirmation;

    return (
      <div className="login">
        <div className="text-center" id="loginText">
          <h3> ENTER GLOBETALK </h3>
        </div>

        <form onSubmit={this.onSubmit} id="loginForm" className="row">

          <div className="col-sm-6">
            <label className="email">Username</label>
            <input type="email" id="username" className="form-control" value={email}
              onChange={event => this.setState({ 'email': event.target.value })} />
          </div>

          <div className="col-sm-6">
            <label className="password">Password</label>
            <input type="password" id="password" className="form-control" value={password}
              onChange={event => this.setState({ 'password': event.target.value })} />
          </div>

          <div className={passwordsMatch ? 'form-group has-ok has-feedback col-sm-6' : 'form-group has-error has-feedback col-sm-6'}>
            <label className="password">Password Confirmation </label>
            <input type="password" id="passwordConfirmation" className='form-control' value={passwordConfirmation}
              onChange={event => this.setState({ 'passwordConfirmation': event.target.value })} />
          </div>

          <div className="col-sm-6 text-center">
            <button type="submit" className="btn btn-sm btn-danger" disabled={isInvalid}> Sign Up </button>
          </div>

          {error && <p>{error.message}</p>}

        </form>
        <Footer />

      </div >
    )
  }
}
