import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Main from './pages/index'
import './styles/App.css';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Main}/>
    </Switch>
  );
}

export default App;
