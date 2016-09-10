import React, { Component } from 'react'
import NavbarLeft from '../NavbarLeft'
import TabList from '../TabList'
import Details from '../Details'

class IndexPage extends Component {

  render() {
    return (
      <div className="IndexPage">
        <NavbarLeft />
        <div className="tablist-detail">
          <TabList />
          <Details />
        </div>
      </div>
    );
  }
  
}

export default IndexPage;
