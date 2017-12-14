import React from 'react'
import {
  FormGroup,
  Classes,
  InputGroup,
  Button,
  Intent
} from '@blueprintjs/core'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { withRouter } from 'react-router-dom'
import { withFormik as formik } from 'formik'
import { compose } from 'recompose'
import config from '../../dashboard.config'

import {
  addWidget,
} from './actions'

import {
  Select
} from '../../components'

import './style.css'

const Form = ({
  types,
  handleSubmit,
  handleChange,
  handleBlur,
  cancel,
  values,
  touched,
  errors,
  dirty,
  datasources
}) => (
    <div className={`${Classes.DIALOG_BODY}`}>
      <form onSubmit={handleSubmit}>
        <FormGroup
          className={touched.name && errors.name ? Classes.INTENT_DANGER : ''}
          label="Name"
          labelFor="name"
          required
        >
          <InputGroup
            className={touched.name && errors.name ? Classes.INTENT_DANGER : ''}
            onChange={handleChange}
            value={values.name}
            id="name"
            name="name"
            onBlur={handleBlur}
            placeholder="Enter name..."
          />
          {touched.name && errors.name ? <div className={Classes.FORM_HELPER_TEXT}>{errors.name}</div> : ''}
        </FormGroup>
        <Select
          touched={touched.type}
          error={errors.type}
          value={values.type}
          onChange={handleChange}
          onBlur={handleBlur}
          options={config.widgetTypes}
          label="Type"
          labelFor="type"
          name="type"
          placeholder="Enter a type..."
        />

        <Select
          touched={touched.datasource}
          error={errors.datasource}
          value={values.datasource}
          onChange={handleChange}
          onBlur={handleBlur}
          options={datasources}
          label="Datasource"
          labelFor="datasource"
          name="datasource"
          placeholder="Enter a datasource..."
        />

        <div className={`${Classes.DIALOG_FOOTER} ${Classes.DARK}`}>
          <div className={`${Classes.DIALOG_FOOTER_ACTIONS} ${Classes.DARK}`}>
            <Button
              text="Cancel"
              onClick={cancel}
            />
            <Button
              type="submit"
              intent={Intent.PRIMARY}
              text="Save"
            />
          </div>
        </div>
      </form>
    </div >
  )

const withFormState = formik({
  mapPropsToValues: () => ({ name: '', type: '', datasource: '' }),
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
  const dashboardId = match.params.id
  return {
    submit:
      formData => dispatch(addWidget({ formData, dashboardId })),
    cancel: () => {
      dispatch(push(`/dashboard/${dashboardId}`))
    }
  }
}

const mapStateToProps = ({ datasources }) => ({
  datasources: Object.keys(datasources)
    .map(key => ({ value: key, name: datasources[key].name }))
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(
  withRouter,
  withConnect,
  withFormState
)(Form)
