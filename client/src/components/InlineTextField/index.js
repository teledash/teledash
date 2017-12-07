import React from 'react'
import {
  Icon
} from '@blueprintjs/core'

class InlineTextField extends React.Component {

  constructor() {
    super()
    this.state = {
      active: false,
      value: ''
    }

    this.onBlur = this.onBlur.bind(this)
    this.onKeyPress = this.onKeyPress.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onBlur() {
    this.setState({ active: false })
  }

  onKeyPress(target) {
    if (target.charCode === 13) {
      this.setState({ active: false })
      this.props.submit(this.state.value)
    }
  }

  onChange(event) {
    this.setState({ value: event.target.value })
  }

  render() {
    return <div > {
      this.state.active ?
        <input autoFocus
          onBlur={this.onBlur}
          onKeyPress={this.onKeyPress}
          onChange={this.onChange}
          className="pt-input"
          placeholder={this.props.value}
          type="text"
        />
        : <div
          onClick={() => { this.setState({ active: true }) }}
        >
          <span id="dashboard-name"> {this.props.value} </span >
          <Icon className="inline-text-icon" iconName="edit" />
        </div>
    } </div>
  }
}

export default InlineTextField
