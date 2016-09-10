import React, { Component } from 'react'
import { Link } from 'react-router'

class NavbarTop extends Component {
  
  render() {
    return (
      <div className="NavbarTop navbar navbar-default navbar-fixed-top">
        <div className="navbar-brand brand-container">
          <Link to="/"> <img className="brand-logo" src="logo.png" /> </Link>
        </div>
        <h3 className="page-title"> {/* Should change this to a redux state */}What is Lorem Ipsum? </h3>
        <button type="button" className="dropdown-icon">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </div>
    )
  }

}

export default NavbarTop
