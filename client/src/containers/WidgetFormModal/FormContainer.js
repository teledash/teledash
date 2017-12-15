import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { withRouter } from 'react-router-dom'
import { Formik } from 'formik'
import { compose } from 'recompose'
import { addWidget } from './actions'
import Form from './Form'
import { mapValuesToProps } from './selectors'

const EnhancedForm = ({ datasources, values, submit, cancel }) => (<Formik
  enableReinitialize
  initialValues={values}
  validate={(values) => {
    const errors = {}
    if (!values.name) errors.name = 'Please enter a name'
    if (!values.type) errors.type = 'Please enter a type'
    if (!values.datasource) errors.datasource = 'Please enter a datasource'
    return errors
  }}
  onSubmit={(
    values,
    {
      setSubmitting,
      setErrors
    }
  ) => {
    submit(values)
  }}
  render={({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  }) => (
    <Form
      handleBlur={handleBlur}
      handleSubmit={handleSubmit}
      values={values}
      errors={errors}
      touched={touched}
      datasources={datasources}
      handleChange={handleChange}
      cancel={cancel}
    />)
  }
/>
)

const mapDispatchToProps = (dispatch, { match }) => {
  const { dashboardId } = match.params
  return {
    submit:
      formData => dispatch(addWidget({ formData, dashboardId })),
    cancel: () => {
      dispatch(push(`/dashboard/${dashboardId}`))
    }
  }
}

const mapStateToProps = ({ datasources, widgets }, { match }) => ({
  values: mapValuesToProps(widgets, match.params.widgetId),
  datasources: Object.keys(datasources)
    .map(key => ({ value: key, name: datasources[key].name }))
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(
  withRouter,
  withConnect,
)(EnhancedForm)
