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

import {
  addWidget,
} from './actions'

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
        <FormGroup
          className={touched.type && errors.type ? Classes.INTENT_DANGER : ''}
          label="Type"
          labelFor="type"
          required
        >
          <div
            className={`${Classes.FILL} ${Classes.SELECT} ${touched.type && errors.type ? Classes.INTENT_DANGER : ''}`}
          >
            <select
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.type}
              name="type"
            >
              <option value="">Choose type...</option>
              <option value="video">Video</option>
              <option value="line_graph">Line Graph</option>
              <option value="map">Map</option>
            </select>
          </div>
          {errors.type &&
            touched.type && <div className={Classes.FORM_HELPER_TEXT}>{errors.type}</div>}
        </FormGroup>
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
  mapPropsToValues: () => ({ name: '', type: '' }),
  validate: (values) => {
    const errors = {}
    if (!values.name) errors.name = 'Please enter a name'
    if (!values.type) errors.type = 'Please enter a type'
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

const withConnect = connect(null, mapDispatchToProps)

export default compose(
  withRouter,
  withConnect,
  withFormState
)(Form)
