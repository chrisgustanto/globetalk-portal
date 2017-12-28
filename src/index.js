import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login/Login.js';
import Register from './components/register/Register.js';
import Start from './components/start/Start.js';
import Reset from './components/reset/Reset.js';
import Header from './components/header/Header.js';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';


ReactDOM.render(
    <BrowserRouter>
        <div>
            <Header />
            <NotificationContainer />
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/start" component={Start} />
                <Route path="/reset" component={Reset} />


            </Switch>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));

