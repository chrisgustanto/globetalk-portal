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
              <li><Link to="/register"><span className="glyphicon glyphicon-user"></span> Register </Link></li>
              <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login </Link></li>
              <li><Link to="/reset"><span className="glyphicon glyphicon-edit"></span> Reset Password </Link></li>
            </ul>
          ) :
            <ul className="nav navbar-nav navbar-right">
              <li onClick={this.logout}><Link to=""><span className="glyphicon glyphicon-log-out"></span> Logout</Link></li>
            </ul>
          }
        </div>
      </nav>
    )
  }
}
