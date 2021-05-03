import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import Login from './pages/Login'
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/> 
        <Route exact path="/login" component={Login}/> 
        <Route exact path="/*" component={Home}/>
      </Switch>  
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
