import React from 'react';
import './App.css';
import { AuthProvider } from '../components/context/AuthProvider';
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
        <Route exact="true" path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/authentication" element={<AuthenticationHandler />} />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Routing />
      </div>
    </AuthProvider>
  );
}

export default App;
