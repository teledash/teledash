import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextInput } from '../../components'

class LineGraphFormFields extends Component {
  constructor(props) {
    super(props)
    this.state = {
      xLabelTouched: false
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(evt) {
    this.props.handleChange(evt)
    this.setState({ xLabelTouched: true })
  }

  render() {
    const {
      errors,
      handleBlur,
      values
    } = this.props

    return (
      // x-mapping
      // y-mapping
      <TextInput
        touched={this.state.xLabelTouched}
        errors={errors.xLabel}
        onChange={this.onChange}
        onBlur={handleBlur}
        value={values.xLabel || '' /* Silence controlled/controlled component error */}
        label="X Axis Label"
        labelFor="xLabel"
        name="xLabel"
        placeholder="Enter x-axis label..."
      />
      // y label
    )
  }
}

export default LineGraphFormFields

LineGraphFormFields.propTypes = {
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  values: PropTypes.object,
  errors: PropTypes.object
}
