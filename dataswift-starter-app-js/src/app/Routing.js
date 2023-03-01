import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../features/Home/HomePage';
import Header from '../components/header/Header';
import LoginPage from '../features/Login/LoginPage';
import AuthenticationHandler from '../features/Login/AuthenticationHandler';
import SignupPage from '../features/Signup/SignupPage';

/**
 * Routing
 *
 * This is the routing of our App.
 */

function Routing() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact="true" path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/authentication" component={AuthenticationHandler} />
      </Routes>
    </Router>
  );
}

export default Routing;
