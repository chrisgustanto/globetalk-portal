import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase.js';
import './Header.css';
import { NotificationManager } from 'react-notifications';

const INITIAL_STATE = {
  user: null
};

export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState(() => ({ user: user }));
      } else {
        this.setState(() => ({ user: null }));
      }
    });
  }

  logout() {
    auth.signOut().then(() => {
      NotificationManager.success('Logout successful', '', 3000);
    }).catch((error) => {
      NotificationManager.success(error.message, '', 3000);
    })
  }

  render() {
    const user = this.state.user;
    return (
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/start">Globe Talk</Link>
          </div>
          {user == null ? (
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/register"><span className="fa fa-user"></span> Register </Link></li>
              <li><Link to="/login"><span className="fa fa-sign-in"></span> Login </Link></li>
              <li><Link to="/reset"><span className="fa fa-edit"></span> Reset Password </Link></li>
            </ul>
          ) :
            <ul className="nav navbar-nav navbar-right">
              <li onClick={this.logout}><Link to=""><span className="fa fa-sign-out"></span> Logout</Link></li>
            </ul>
          }
        </div>
      </nav>
    )
  }
}
