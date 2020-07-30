import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Main from './pages/index'
import Login from './pages/login'
import './styles/App.css';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Main}/>
      <Route exact path='/sign-in' component={Login} />
    </Switch>
  );
}

export default App;
