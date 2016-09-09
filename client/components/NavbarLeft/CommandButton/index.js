import React, { Component } from 'react';
import { Link } from 'react-router';
import { ButtonGroup, Button, Glyphicon } from 'react-bootstrap'

class NavbarLeft extends Component {

  render() {
    // Then we go ahead and return some JSX
    return (
      <div>
        <Button className="square-button">
          <Glyphicon glyph="glyphicon glyphicon-piggy-bank" />
        </Button>
        <span className="square-button-text">
          <span className="command-symbol">⌘</span> 
          <span> {this.props.className} </span>
        </span>
      </div>
    );
  }

}

export default NavbarLeft;
