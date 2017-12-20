import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { withRouter } from 'react-router-dom'
import { Formik } from 'formik'
import { compose } from 'recompose'
import { addWidget, editWidget } from './actions'
import Form from './Form'
import { mapValuesToProps } from './selectors'
import {
  mapTypeToFormFields,
  mapTypeToFormErrors
} from './mapTypeToForm'


const EnhancedForm = ({
  datasources,
  values,
  createWidget,
  updateWidget,
  cancel,
  editMode
}) => (<Formik
  enableReinitialize
  initialValues={values}
  validate={(values) => {
    const errors = {}
    if (!values.name) errors.name = 'Please enter a name'
    if (!values.type) errors.type = 'Please enter a type'
    if (!values.datasource) errors.datasource = 'Please enter a datasource'
    return { ...errors, ...mapTypeToFormErrors(values) }
  }}
  onSubmit={(
    values,
    {
      setSubmitting,
      setErrors
    }
  ) => {
    if (editMode) updateWidget(values)
    else createWidget(values)
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
      mapTypeToFormFields={mapTypeToFormFields}
    />)
  }
/>
)

const mapDispatchToProps = (dispatch, { match }) => {
  const { dashboardId, widgetId } = match.params
  return {
    createWidget:
      formData => dispatch(addWidget({ formData, dashboardId })),
    updateWidget:
      formData => dispatch(editWidget({ formData, dashboardId, widgetId })),
    cancel: () => {
      dispatch(push(`/dashboard/${dashboardId}`))
    }
  }
}

const mapStateToProps = ({ datasources, widgets }, { match }) => ({
  values: mapValuesToProps(widgets, match.params.widgetId),
  editMode: !!match.params.widgetId,
  datasources: Object.keys(datasources)
    .map(key => ({ value: key, name: datasources[key].name }))
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(
  withRouter,
  withConnect,
)(EnhancedForm)
