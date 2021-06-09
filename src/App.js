import React, { useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import NavBar from './components/NavBar';


function App() {
  return (
      <Router>
        {/* <NavBar user={userState} clickHandle={clickHandle} logMeOut = {logMeOut} loginState = {loginState} signupState = {signupState} handleLoginInput = {handleLoginInput} handleSignupInput = {handleSignupInput} handleLoginSubmit = {handleLoginSubmit} /> */}
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route exact path="/blog/:id">
            <BlogPage user={userState}/>
          </Route> */}
        </Switch>
      </Router>
  );
}

export default App;
