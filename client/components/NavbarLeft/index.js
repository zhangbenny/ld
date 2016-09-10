import React, { Component } from 'react';
import { Link } from 'react-router';
import CommandButton from './CommandButton'

class NavbarLeft extends Component {

  render() {
    // Then we go ahead and return some JSX
    return (
      <div className="NavbarLeft-container">
        <div className="NavbarLeft">
          <CommandButton className="1"/>
          <CommandButton className="2"/>
          <CommandButton className="3"/>
          <CommandButton className="4"/>
        </div>
      </div>
    );
  }

}

export default NavbarLeft;
