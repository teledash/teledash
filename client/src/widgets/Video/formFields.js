import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DatasourceNameSelect } from '../../containers'

class VideoFormFields extends Component {
  componentDidMount() {
    /* `setFieldValue` registers the form fields with the parent form.
       This allows behavior such as, visually displaying these fields with errors
       if there is a `form submit`, and these form fields have not been `touched`
       and are empty. Ideally I would like to use `setValues` provided by formik.
       However, it doesn't work for some unexplained reason.
       https://github.com/jaredpalmer/formik#setvalues-fields--field-string-any---void
    */
    this.props.setFieldValue('datasourceId', '')
  }

  render() {
    const {
      handleChange,
      handleBlur,
      values,
      errors,
      touched,
    } = this.props

    return (
      <DatasourceNameSelect
        type="video"
        touched={touched.datasourceId}
        error={errors.datasourceId}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.datasourceId || '' /* Silence controlled/controlled component error */}
        label="Video Datasource"
        name="datasourceId"
        placeholder="Select a video datasource..."
      />
    )
  }
}

export default VideoFormFields

VideoFormFields.propTypes = {
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  values: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
}
