import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DatasourceSuggest } from '../../containers'

class MapFormFields extends Component {
  componentDidMount() {
    /* `setFieldValue` registers the form fields with the parent form.
       This allows behavior such as, visually displaying these fields with errors
       if there is a `form submit`, and these form fields have not been `touched`
       and are empty. Ideally I would like to use `setValues` provided by formik.
       However, it doesn't work for some unexplained reason.
       https://github.com/jaredpalmer/formik#setvalues-fields--field-string-any---void
    */
    this.props.setFieldValue('markerLat', '')
    this.props.setFieldValue('markerLong', '')
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
          touched={touched.markerLat}
          error={errors.markerLat}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.markerLat || '' /* Silence controlled/controlled component error */}
          label="Marker Latitude"
          name="markerLat"
          placeholder="Enter latitude value source..."
          setFieldValue={setFieldValue}
        />
        <DatasourceSuggest
          touched={touched.markerLong}
          error={errors.markerLong}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.markerLong || '' /* Silence controlled/controlled component error */}
          label="Marker Longitude"
          name="markerLong"
          placeholder="Enter longitude value source..."
          setFieldValue={setFieldValue}
        />
      </div>
    )
  }
}

export default MapFormFields

MapFormFields.propTypes = {
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  values: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
  setFieldValue: PropTypes.func,
}
