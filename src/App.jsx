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
  console.log('Teste>>>>>>>>>>>', window.sessionStorage.getItem("auth"))
  useEffect(() => {
    Hub.listen('auth', (event) => {
       console.log('auth event', event);
       if (event.payload.event === 'signIn') {
        setCurrentUser(event.payload.data)
        window.sessionStorage.setItem("auth", true);
        window.location.reload();
       }else if (event.payload.event === 'signIn_failure'){
         alert('usuario e/ou senha incorreto(s)')
       }
    })
  })


  return (
    <div>
    {
    currentUser || window.sessionStorage.getItem("auth") ? 
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
