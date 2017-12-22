import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextInput } from '../../components'
import { DatasourceSuggest } from '../../containers'

class LineGraphFormFields extends Component {
  render() {
    const {
      errors,
      handleBlur,
      handleChange,
      values,
      touched,
      setTouched,
      setFieldValue
    } = this.props
    return (
      <div>
        <DatasourceSuggest
          touched={touched.xValue}
          error={errors.xValue}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.xValue || '' /* Silence controlled/controlled component error */}
          label="X Axis Value"
          name="xValue"
          placeholder="Enter x-axis value source..."
          setFieldValue={setFieldValue}
        />

        <DatasourceSuggest
          touched={touched.yValue}
          error={errors.yValue}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.yValue || '' /* Silence controlled/controlled component error */}
          label="Y Axis Value"
          name="yValue"
          placeholder="Enter y-axis value source..."
          setFieldValue={setFieldValue}
        />

        <TextInput
          touched={touched.xLabel}
          errors={errors.xLabel}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.xLabel || '' /* Silence controlled/controlled component error */}
          label="X Axis Label"
          name="xLabel"
          placeholder="Enter x-axis label..."
        />

        <TextInput
          touched={touched.yLabel}
          errors={errors.yLabel}
          onChange={handleChange}
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
  errors: PropTypes.object,
  touched: PropTypes.object
}
