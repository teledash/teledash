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

const Form = ({
  types,
  handleSubmit,
  cancel,
  handleChange,
  values,
}) => (
    <div className={`${Classes.DIALOG_BODY} ${Classes.DARK}`}>
      <form onSubmit={handleSubmit}>
        <FormGroup
          className={`${Classes.DARK}`}
          label="Name"
          labelFor="name"
          required
        >
          <InputGroup
            required
            className={`${Classes.DARK}`}
            onChange={handleChange}
            value={values.name}
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
              onChange={handleChange}
              value={values.type}
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
  mapPropsToValues: props => ({ name: '', type: '' }),
  validate: (values, props) => {
    const errors = {}
    // if (!values.email) {
    //   errors.email = 'Required';
    // } else if (
    //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    // ) {
    //   errors.email = 'Invalid email address';
    // }
    // return errors;
  },
  handleSubmit: (
    values,
    {
      props,
      setErrors,
    }
  ) => {
    props.submit(values)
  },
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
