import React, { Component } from 'react'
import NavbarLeft from '../NavbarLeft'
import TabList from '../TabList'

class IndexPage extends Component {

  render() {
    return (
      <div className="IndexPage">
        <NavbarLeft />
        <TabList />
      </div>
    );
  }
  
}

export default IndexPage;
