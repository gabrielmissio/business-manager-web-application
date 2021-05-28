import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login'
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom";
import Amplify from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure({
  Auth: {
    region: 'us-east-1',

    userPoolId: 'us-east-1_GYeykt3Up',

    userPoolWebClientId: '1ou7m84020nflg5305hs7eh0lm'
  }
});

class App extends React.Component {
  
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/> 
          <Route exact path="/login" component={Login}/> 
          <Route exact path="/*" component={Home}/>
        </Switch>  
      </Router>
    )
  }
  
}

export default withAuthenticator(App);
