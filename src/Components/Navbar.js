import React from "react";
//import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
      <div className="side-nav">
      <div className="logo">
          <img id="logo" src="C:\Users\shaik\Documents\favicon-32x32.png" alt="Logo"/>
      </div>
      <div className="iconlist">
          <i className="fas fa-align-justify awesome"></i>
          <i className="far fa-clock awesome"></i>
          <i className="fas fa-trophy awesome"></i>
          <i className="fas fa-list awesome"></i>
          <i className="fas fa-comments awesome"></i>

      </div>
  </div>
        <a className="navbar-brand" href="/">
          <font color="white">MedRep</font>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                <font color="white">Reports</font>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <font color="white">Link</font>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle bg-primary"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <font color="white">Account</font>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item bg-primary" href="/">
                    <div
                      className={`form-check form-switch text-${
                        props.mode === "primary" ? "dark" : "primary"
                      } text-light`}
                    >
                      <input
                        className="form-check-input"
                        onClick={props.toggleMode}
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        Dark Mode
                      </label>
                    </div>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider bg-white" />
                </li>
                <li>
                  <a className="dropdown-item bg-primary" href="/">
                    <font color="white">Prescription</font>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider bg-white" />
                </li>
                <li>
                  <a className="dropdown-item bg-primary" href="/">
                    <font color="white">Doctors Nearby</font>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          {/*<form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              <font color="white">Search with "Name" or "MID"</font>
            </button>
  </form>*/}
        </div>
      </div>
    </nav>
  );
}
