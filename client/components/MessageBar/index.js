import React, { Component } from 'react'
import { FormControl } from 'react-bootstrap'

class MessageBar extends Component {

  render() {
    return (
      <div className="MessageBar">
        <FormControl type="text" placeholder="Type a Message..." />  
      </div>
    )
  }

}

export default MessageBar 
