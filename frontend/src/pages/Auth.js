import React, { Component } from 'react';
import './Auth.css';
import { formatError } from 'graphql';

class AuthPage extends Component {
  render() {
    return (
      <form className='auth-form'>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' />
        </div>
        <div className='form-control'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' />
        </div>

        <div className='form-actions'>
          <button type='submit'>Submit</button>
          <button type='button'>Switch to Signup</button>
        </div>
      </form>
    );
  }
}

export default AuthPage;
