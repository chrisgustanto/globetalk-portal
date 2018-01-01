import React, { Component } from 'react';
import { auth, db } from '../../firebase.js';
import './Register.css';
import Footer from '../footer/Footer.js'
import { roles } from '../common/roles.js';
import { NotificationManager } from 'react-notifications';

const INITIAL_STATE = {
  email: '',
  password: '',
  passwordConfirmation: '',
  role: '',
  error: null,
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email, password, role } = this.state;
    auth.createUserWithEmailAndPassword(email, password).then((user) => {
      this.setState(() => ({ ...INITIAL_STATE }));
      this.sendVerificationEmail(user);
      this.saveUserRole(user, role);
      NotificationManager.success('User Created! Please Verify Your Email', '', 3000);
      this.props.history.push('/start');
    }).catch((error) => {
      this.setState({ 'error': error });
      NotificationManager.error(error.message, '', 3000);
    });
    event.preventDefault();
  }

  sendVerificationEmail(user) {
    user.sendEmailVerification().then(() => {
    }).catch((error) => {
      console.log(error);
    })
  }

  saveUserRole(user, role) {
    db.ref('users/' + user.uid).set({
      username: user.email,
      role: role
    });
  }

  render() {
    const { email, password, passwordConfirmation, role } = this.state;
    const isInvalid = password === '' || email === '' || password !== passwordConfirmation || role === '';
    const passwordsMatch = password === passwordConfirmation;

    return (
      <div className="login">
        <div className="text-center" id="loginText">
          <h3> ENTER GLOBETALK </h3>
        </div>

        <form onSubmit={this.onSubmit} id="loginForm" className="row">

          <div className="col-sm-6">
            <label className="email">Email</label>
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

          <div className='col-sm-6'>
            <label className="role"> Role </label>
            <select type="dropdown" id="role" className='form-control'
              onChange={event => this.setState({ 'role': event.target.value })}> 
              {roles.map((role) => <option key={role} value={role}>{role}</option>)}
            </select>
          </div>

          <div className="col-sm-6 text-center">
            <button type="submit" className="btn btn-sm btn-danger" disabled={isInvalid}> Sign Up </button>
          </div>
        </form>
        <Footer />

      </div >
    )
  }
}
