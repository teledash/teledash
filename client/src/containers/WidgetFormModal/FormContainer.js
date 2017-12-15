import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { withRouter } from 'react-router-dom'
import { withFormik as formik } from 'formik'
import { compose } from 'recompose'
import { addWidget } from './actions'
import Form from './Form'
import { mapValuesToProps } from './selectors'

const withFormState = formik({
  mapPropsToValues: ({ values }) => values,
  validate: (values) => {
    const errors = {}
    if (!values.name) errors.name = 'Please enter a name'
    if (!values.type) errors.type = 'Please enter a type'
    if (!values.datasource) errors.datasource = 'Please enter a datasource'
    return errors
  },
  handleSubmit: (
    values,
    {
      props,
    }
  ) => {
    props.submit(values)
  },
  displayName: 'WidgetForm'
})

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
  withFormState,
)(Form)
