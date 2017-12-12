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
  clearWidgetForm,
  writeWidgetForm,
} from './actions'

const Form = ({
  types,
  submit,
  cancel,
  onFormChange,
  name,
  type
}) => (
    <div className={`${Classes.DIALOG_BODY} ${Classes.DARK}`}>
      <form onSubmit={(event) => {
        event.preventDefault()
        submit({ name, type })
      }}
      >
        <FormGroup
          className={`${Classes.DARK}`}
          label="Name"
          labelFor="name"
          required
        >
          <InputGroup
            required
            className={`${Classes.DARK}`}
            onChange={onFormChange}
            value={name}
            id="name"
            name="name"
            placeholder="Enter name..."
          />
        </FormGroup>
        <FormGroup
          className={`${Classes.DARK}`}
          label="Type"
          labelFor="type"
          required
        >
          <div className={`${Classes.DARK} ${Classes.FILL} ${Classes.SELECT}`}>
            <select
              required
              onChange={onFormChange}
              value={type}
              name="type"
            >
              <option defaultValue>Choose type...</option>
              <option value="video">Video</option>
              <option value="line_graph">Line Graph</option>
              <option value="map">Map</option>
            </select>
          </div>
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
  // Transform outer props into form values
  mapPropsToValues: props => ({ email: '', password: '' }),
  // Add a custom validation function (this can be async too!)
  validate: (values, props) => {
    const errors = {};
    // if (!values.email) {
    //   errors.email = 'Required';
    // } else if (
    //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    // ) {
    //   errors.email = 'Invalid email address';
    // }
    // return errors;
  },
  // // Submission handler
  // handleSubmit: (
  //   values,
  //   {
  //     props,
  //     setSubmitting,
  //     setErrors /* setValues, setStatus, and other goodies */,
  //   }
  // ) => {

  // },
})

const mapDispatchToProps = (dispatch, {match}) => {
  const dashboardId = match.params.id
  return {
    submit:
      formData => dispatch(addWidget({ formData, dashboardId })),
    onFormChange: ({ target }) => {
      const { name, value } = target
      dispatch(writeWidgetForm({ [name]: value }))
    },
    cancel: () => {
      dispatch(push(`/dashboard/${dashboardId}`))
      dispatch(clearWidgetForm())
    }
  }
}

const withConnect = connect(null, mapDispatchToProps)

export default compose(
  withRouter,
  withConnect,
  withFormState
)(Form)
