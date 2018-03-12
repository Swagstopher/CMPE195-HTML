import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './Home.jsx';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';


const Main = () => (
  <main>
    <Switch>
      <Route path='/' component={Home}/>
      <Route path='/signin' component={SignIn}/>
      <Route path='/signup' component={SignUp}/>
    </Switch>
  </main>
)

export default Main;