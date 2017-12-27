import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">GlobeTalk</a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/register"><span className="glyphicon glyphicon-user"></span> Register </Link></li>
            <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login </Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}
