import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import {  BrowserRouter as Router} from "react-router-dom";
import {ContextApi} from "./components/ContextApi"
ReactDOM.render(
  <ContextApi>
    <Router>
    <App />
    </Router>
    </ContextApi>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
