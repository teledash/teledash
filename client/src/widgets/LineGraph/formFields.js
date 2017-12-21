import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextInput } from '../../components'
import { DatasourceSuggest } from '../../containers'

class LineGraphFormFields extends Component {
  constructor(props) {
    super(props)
    this.state = {
      xLabelTouched: false,
      yLabelTouched: false,
      xValueTouched: false,
      yValueTouched: false,
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(evt) {
    this.props.handleChange(evt)
    this.setState({ [`${evt.target.name}Touched`]: true })
  }

  render() {
    const {
      errors,
      handleBlur,
      values
    } = this.props

    return (
      <div>
        <DatasourceSuggest
          touched={this.state.xValueTouched}
          error={errors.xValue}
          onChange={this.onChange}
          onBlur={handleBlur}
          value={values.xValue || '' /* Silence controlled/controlled component error */}
          label="X Axis Value"
          name="xValue"
          placeholder="Enter x-axis value source..."
        />

        <DatasourceSuggest
          touched={this.state.yValueTouched}
          error={errors.yValue}
          onChange={this.onChange}
          onBlur={handleBlur}
          value={values.yValue || '' /* Silence controlled/controlled component error */}
          label="Y Axis Value"
          name="yValue"
          placeholder="Enter y-axis value source..."
        />

        <TextInput
          touched={this.state.xLabelTouched}
          errors={errors.xLabel}
          onChange={this.onChange}
          onBlur={handleBlur}
          value={values.xLabel || '' /* Silence controlled/controlled component error */}
          label="X Axis Label"
          name="xLabel"
          placeholder="Enter x-axis label..."
        />

        <TextInput
          touched={this.state.yLabelTouched}
          errors={errors.yLabel}
          onChange={this.onChange}
          onBlur={handleBlur}
          value={values.yLabel || '' /* Silence controlled/controlled component error */}
          label="Y Axis Label"
          name="yLabel"
          placeholder="Enter y-axis label..."
        />
      </div>
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
