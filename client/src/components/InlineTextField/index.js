import React from 'react'
import {
  Icon
} from '@blueprintjs/core'

class InlineTextField extends React.Component {

  constructor() {
    super()
    this.state = {
      active: false
    }
  }

  render() {
    return <div > {
      this.state.active ?
        <input autoFocus onBlur={() => { this.setState({ active: !this.state.active }) }} className="pt-input" placeholder={this.props.value} type="text" />
        : <div
          onClick={() => { this.setState({ active: !this.state.active }) }}
        >
          <span id="dashboard-name"> {this.props.value} </span >
          <Icon className="inline-text-icon" iconName="edit" />
        </div>
    } </div>
  }
}

export default InlineTextField
