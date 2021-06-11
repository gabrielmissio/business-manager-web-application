import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login'
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom";
import Amplify, { Hub } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure({
  Auth: {
    region: 'us-east-1',

    userPoolId: 'us-east-1_h3KG71aqP',

    userPoolWebClientId: '1p1vptgvda6123gkfibgf2rhs4'
  }
});

function App() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    Hub.listen('auth', (event) => {
       console.log('auth event', event);
       setCurrentUser(event.payload.data)
    })
  })


  return (
    <div>
    {
    currentUser ? 
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>  
        <Route exact path="/*" component={Home}/>
      </Switch>  
    </Router> 
    : 
    <Login/>}
    
    </div>
  )

  
}

export default App;
