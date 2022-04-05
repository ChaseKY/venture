import React from 'react';

function Login() {
  return (
    <div>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input for="emailInput-login" className="input" type="email" placeholder="Email" />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left">
          <input
            for="passwordInput-login"
            className="input"
            type="password"
            placeholder="Password"
          />
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <button type="button" className="btn btn-success">
        Login
      </button>
      <br></br>
      <br></br>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input for="emailInput-signup" className="input" type="email" placeholder="Email" />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left">
          <input
            for="passwordInput-signup"
            className="input"
            type="password"
            placeholder="Password"
          />
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <button type="button" className="btn btn-success">
        Signup
      </button>
    </div>
  );
}

export default Login;
