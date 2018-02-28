import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/login/Login.js';
import Register from './components/register/Register.js';
import Start from './components/start/Start.js';
import Reset from './components/reset/Reset.js';
import Header from './components/header/Header.js';
import Guide from './components/guide/Guide.js';
import Slide from './components/slide/Slide.js';
import InitialLoader from './components/loader/InitialLoader';
import Footer from './components/footer/Footer';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { auth, db } from './firebase.js';
import {updateAuthChange, removeLoader} from './actions';


const firebase = {auth, db};

const store = createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(firebase)));

firebase.auth.onAuthStateChanged((user) => {
  user? store.dispatch(updateAuthChange(user)) : store.dispatch(updateAuthChange(null));
  store.dispatch(removeLoader());
});


console.log(this.props);
ReactDOM.render(
    <Provider store = {store}>
      <BrowserRouter>
          <div className="main-container">
            <InitialLoader />
            <Header />
            <NotificationContainer />
            <Switch>
                <Route exact path="/" render={() => (<Redirect to="/login" />)} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/start" component={Start} />
                <Route path="/guide" component={Guide} />
                <Route path="/slide" component={Slide} />
                <Route path="/reset" component={Reset} />
            </Switch>
            <Footer />
          </div>
      </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
