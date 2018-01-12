import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/login/Login.js';
import Register from './components/register/Register.js';
import Start from './components/start/Start.js';
import Reset from './components/reset/Reset.js';
import Header from './components/header/Header.js';
import Guide from './components/guide/Guide.js';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';


ReactDOM.render(
    <BrowserRouter>
        <div>
            <Header />
            <NotificationContainer />
            <Switch>
                <Route exact path="/" render={() => (<Redirect to="/login" />)} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/start" component={Start} />
                <Route path="/guide" component={Guide} />
                <Route path="/reset" component={Reset} />


            </Switch>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));

