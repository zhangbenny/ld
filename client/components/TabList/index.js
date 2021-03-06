import React, { Component } from 'react';
import Tab from './Tab'

class TabList extends Component {

  render() {
    // Then we go ahead and return some JSX
    return (
      <div className="TabList-container">
        <div className="TabList">
          <Tab className="1"/>
          <Tab className="2"/>
          <Tab className="3"/>
          <Tab className="5"/>
          <Tab className="6"/>
          <Tab className="7"/>
          <Tab className="8"/>
          <Tab className="9"/>
          <Tab className="10"/>
          <Tab className="11"/>
          <Tab className="12"/>
        </div>
      </div>
    );
  }

}

export default TabList;
