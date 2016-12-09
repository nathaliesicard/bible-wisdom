import React from 'react';
import { render } from 'react-dom'
import './App.css';
import App from './App';


//import "font-awesome-webpack"
//import 'bootstrap-loader'

import { Router, Route, browserHistory, IndexRoute } from 'react-router'


/*
function NoMatch() {
  return <img src={ require('../static/img/dice.png') } />;
}
*/

render((
  <Router history={browserHistory}>
      <Route path="/" component={App} />
    </Router>),
  document.getElementById('root')
);
