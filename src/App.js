import React from 'react'
import { Switch,BrowserRouter,Route, Redirect } from 'react-router-dom';
import Layout from './Layout/Layout.jsx'
import './App.css';



function App() {
  return (
     
    <BrowserRouter>
    <Switch>
      <Route exact path = "/userdetails" component = {Layout} />
      <Redirect from ="/" to = "/userdetails" />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
