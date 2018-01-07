import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { withRouter } from 'react-router-dom'
import { Formik } from 'formik'
import { compose } from 'recompose'
import { addDatasource, editDatasource } from './actions'
import Form from './Form'
import { mapValuesToProps } from './selectors'

const EnhancedForm = ({
  values,
  createDatasource,
  updateDatasource,
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
    if (!values.url) errors.url = 'Please enter a url'
    return { ...errors }
  }}
  onSubmit={(
    values,
    {
      setSubmitting,
      setErrors
    }
  ) => {
    if (editMode) updateDatasource(values)
    else createDatasource(values)
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
  const { dashboardId, datasourceId } = match.params
  return {
    createDatasource:
      formData => dispatch(addDatasource({ formData, dashboardId })),
    updateDatasource:
      formData => dispatch(editDatasource({ formData, dashboardId, datasourceId })),
    cancel: () => {
      dispatch(push(`/dashboard/${dashboardId}`))
    }
  }
}

const mapStateToProps = ({ datasources }, { match }) => ({
  values: mapValuesToProps(datasources, match.params.datasourceId),
  editMode: !!match.params.datasourceId,
  datasources
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(
  withRouter,
  withConnect,
)(EnhancedForm)
