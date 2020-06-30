import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top py-3">
        <div className="container">
          <a className="navbar-brand" href="#home">
            JEFFRI
          </a>
          <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarResponsive">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#home">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">SKILLS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#exp">EXP</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#certs">CERTS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">CONTACT</a>
              </li>
            </ul>
        </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;
