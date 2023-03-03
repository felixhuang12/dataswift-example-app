import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { getParameterByName } from '../../utils/windowHelper';

/**
 * AuthenticationHandler
 *
 * This is the authentication handler of our App, handles the 'token' or 'error'
 * parameters at the '/authentication' route.
 *
 * If the token is valid, it stores it in the session storage and navigate the user back to '/' route.
 *
 * If error is attached to the parameters, navigates the user back to the Login Page.
 */
function AuthenticationHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getParameterByName('token');
    const error = getParameterByName('error');

    if (error) {
      navigate('/login');
    }

    if (token) {
      sessionStorage.setItem('token', token);
      navigate('/');
    }
  }, [navigate]);

  return <div>Loading...</div>;
}

export default AuthenticationHandler;
