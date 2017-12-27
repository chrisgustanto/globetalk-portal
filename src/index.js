import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './components/app/App.js';
import Login from './components/login/Login.js';
import isAuthenticated from './firebase.js';


ReactDOM.render(
    <BrowserRouter>
        <div>
            <App />
            <Switch>
                <Route path="/login" component={Login} />
            </Switch>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));


// const MatchWhenAuthorized = ({ component: Component, ...rest }) => (
//     <Match {...rest} render={renderProps => (
//         isAuthenticated() ? (
//             <Component {...renderProps} />
//         ) : (
//                 <Redirect to={{
//                     pathname: '/login',
//                     state: { from: renderProps.location }
//                 }} />
//             )
//     )} />
// )
