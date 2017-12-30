import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { TextInput } from '../../components'
import { DatasourceSuggest } from '../../containers'
import mapValuesToEditable from './mapValuesToEditable'

class LineGraphFormFields extends Component {
  componentDidMount() {
    /* `setFieldValue` registers the form fields with the parent form.
       This allows behavior such as, visually displaying these fields with errors
       if there is a `form submit`, and these form fields have not been `touched`
       and are empty. Ideally I would like to use `setValues` provided by formik.
       However, it doesn't work for some unexplained reason.
       https://github.com/jaredpalmer/formik#setvalues-fields--field-string-any---void
    */
    const { setFieldValue, editMode } = this.props
    if (!editMode) {
      setFieldValue('xValue', '')
      setFieldValue('yValue', '')
      setFieldValue('xLabel', '')
      setFieldValue('yLabel', '')
    }
  }

  render() {
    const {
      errors,
      handleBlur,
      handleChange,
      values,
      touched,
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

LineGraphFormFields.propTypes = {
  editMode: PropTypes.bool,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  values: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
  setFieldValue: PropTypes.func,
}

const mapStateToProps = ({ datasources }, { editMode, values }) => ({
  values: editMode ? mapValuesToEditable(values, datasources) : values
})

export default connect(mapStateToProps)(LineGraphFormFields)
