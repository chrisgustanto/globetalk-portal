import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseRegister } from '../../actions';
import logo from '../../imgs/logo.png';
import bg from '../../imgs/auth_bg.jpg';
import './Register.css';
import { roles } from '../common/roles.js';

const INITIAL_STATE = {
  email: '',
  password: '',
  passwordConfirmation: '',
  role: 'student',
  error: null,
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email, password, role } = this.state;
    this.props.firebaseRegister(email, password, role);
    event.preventDefault();
  }

  componentWillMount(){
    if(this.props.auth)
      this.props.history.replace('/start');
  }

  componentWillReceiveProps(nextProps){
    if(!!nextProps.auth )
      this.props.history.replace('/start');
  }

  render() {
    const { email, password, passwordConfirmation, role } = this.state;
    const isInvalid = password === '' || email === '' || password !== passwordConfirmation || role === '';

    return (
      <div className="register-container">
        <img className="register-container-bg" src={bg} alt="background"/>
        <div className="register-box">
          <div className="register-form-box">
            <div className="form-title">SIGN UP</div>
            <form onSubmit={this.onSubmit} className="register-form">
              <div className="email-div">
                <label className="email-label">EMAIL ADDRESS</label>
                <input type="email" className="email-input" value={email}
                  onChange={event => this.setState({ 'email': event.target.value })} />
              </div>
              <div className="passwd-div">
                <label className="passwd-label">Password</label>
                <input type="password" className="passwd-input" value={password}
                  onChange={event => this.setState({ 'password': event.target.value })} />
              </div>
              <div className="passwd-match-div">
                <label className="passwd-match-label">Password Confirmation </label>
                <input type="password" className='passwd-match-input' value={passwordConfirmation}
                  onChange={event => this.setState({ 'passwordConfirmation': event.target.value })} />
              </div>
              <div className='role-div'>
                <label className="role-label"> Role </label>
                <select type="dropdown" className='role-input'
                  onChange={event => this.setState({ 'role': event.target.value })}>
                  {roles.map((role) => <option key={role} value={role}>{role}</option>)}
                </select>
              </div>
              <button type="submit" className="register-button" disabled={isInvalid}>SIGN UP</button>
            </form>
          </div>
          <div className="learn-more-box">
            <div className="learn-title">Become A Part</div>
            <div className="learn-title">Of Our Community</div>
            <img className="globe-logo" src={logo} alt="globetalk-logo"/>
            <div className="logo-texts">globe talk</div>
            <button className="learn-button">LEARN MORE</button>
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = ({auth}) => ({auth});

export default connect(mapStateToProps, {firebaseRegister})(Register);
