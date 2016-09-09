import React, { Component } from 'react';
import { Link } from 'react-router';
import { ButtonGroup, Button, Glyphicon } from 'react-bootstrap'

class NavbarLeft extends Component {

  render() {
    // Then we go ahead and return some JSX
    return (
      <Button>
        <Glyphicon glyph="glyphicon glyphicon-piggy-bank" />
      </Button>
    );
  }

}

export default NavbarLeft;
