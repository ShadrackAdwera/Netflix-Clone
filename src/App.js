import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Main from './pages/index'
import Login from './pages/login'
import Plan from './pages/plan'
import Profile from './pages/profile';
import './styles/App.css';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Main}/>
      <Route exact path='/sign-in' component={Login} />
      <Route exact path = '/plan' component={Plan}/>
      <Route exact path= '/profile' component={Profile} />
    </Switch>
  );
}

export default App;
