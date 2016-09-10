import React, { Component } from 'react'
import { Link } from 'react-router'
import NavbarTop from '../NavbarTop'

class Main extends Component {

  render() {
    return (
      <div id="root">
        <NavbarTop />
        {/* We use cloneElement here so we can auto pass down props */}
        { React.cloneElement(this.props.children, this.props) }
      </div>
    );
  }
  
}

export default Main;
