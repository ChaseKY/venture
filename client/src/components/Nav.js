import React from 'react';
import Logo from '../assets/VENTURElogo.png';

function Nav(props) {
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src={Logo} width="60" height="30" />
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" onClick={() => props.setCurrent(0)}>
              Home
            </a>

            <a className="navbar-item" onClick={() => props.setCurrent(1)}>
              About
            </a>

            <a className="navbar-item" onClick={() => props.setCurrent(2)}>
              Profile
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <a className="button is-light" onClick={() => props.setCurrent(3)}>
                Log in
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
{
  /* <button type="button" class="btn btn-success" onClick={() => props.setCurrent(0)}>
        Home
      </button>
      <button type="button" class="btn btn-success" onClick={() => props.setCurrent(1)}>
        About
      </button>
      <button type="button" class="btn btn-success" onClick={() => props.setCurrent(2)}>
        Profile
      </button> */
}
