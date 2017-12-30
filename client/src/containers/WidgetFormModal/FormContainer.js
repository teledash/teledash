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
  mapTypeToFormErrors,
  beforeSubmit
} from './mapTypeToForm'

const EnhancedForm = ({
  values,
  createWidget,
  updateWidget,
  cancel,
  editMode,
  datasources
}) => (<Formik
  enableReinitialize
  initialValues={values}
  validate={(values) => {
    const errors = {}
    if (!values.name) errors.name = 'Please enter a name'
    if (!values.type) errors.type = 'Please enter a type'
    return { ...errors, ...mapTypeToFormErrors(values) }
  }}
  onSubmit={(
    values,
    {
      setSubmitting,
      setErrors
    }
  ) => {
    const valuesToSubmit = beforeSubmit(values, datasources)
    if (editMode) updateWidget(valuesToSubmit)
    else createWidget(valuesToSubmit)
  }}
  render={({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    resetForm,
    setTouched,
    setFieldValue,
    dirty
  }) => (
    <Form
      editMode={editMode}
      handleBlur={handleBlur}
      handleSubmit={handleSubmit}
      values={values}
      errors={errors}
      touched={touched}
      handleChange={handleChange}
      cancel={cancel}
      mapTypeToFormFields={mapTypeToFormFields}
      resetForm={resetForm}
      setTouched={setTouched}
      setFieldValue={setFieldValue}
      dirty={dirty}
      isSubmitting={isSubmitting}
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

const mapStateToProps = ({ widgets, datasources }, { match }) => ({
  values: mapValuesToProps(widgets, match.params.widgetId),
  editMode: !!match.params.widgetId,
  datasources
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(
  withRouter,
  withConnect,
)(EnhancedForm)
