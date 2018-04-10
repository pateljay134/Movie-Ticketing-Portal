import React from 'react';
import ReactDOM from 'react-dom';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import Index from './Components/Index';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './assets/css/bootstrap.min.css'
import './assets/css/bootstrap-responsive.min.css'

import { createStore } from 'redux';
import allReducers from './Reducers';
import { Provider } from 'react-redux';

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Index} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)

