import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { DatasourceSuggest } from '../../containers'
import mapValuesToEditable from './mapValuesToEditable'

class MapFormFields extends Component {
  componentDidMount() {
    /* `setFieldValue` registers the form fields with the parent form.
       This allows behavior such as, visually displaying these fields with errors
       if there is a `form submit`, and these form fields have not been `touched`
       and are empty. Ideally I would like to use `setValues` provided by formik.
       However, it doesn't work for some unexplained reason.
       https://github.com/jaredpalmer/formik#setvalues-fields--field-string-any---void
    */
    const { setFieldValue, editMode, values } = this.props
    // Values will get set by props. In our case using connect.
    if (editMode) {
      setFieldValue('markerLong', values.markerLong)
      setFieldValue('markerLat', values.markerLat)
    } else {
      setFieldValue('markerLong', '')
      setFieldValue('markerLat', '')
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

MapFormFields.propTypes = {
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

export default connect(mapStateToProps)(MapFormFields)
