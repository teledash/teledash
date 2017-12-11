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
  widgetForm
}) => (
    <div className={`${Classes.DIALOG_BODY} ${Classes.DARK}`}>
      <form onSubmit={(event) => {
        event.preventDefault()
        submit({ ...widgetForm })
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
            value={widgetForm.name}
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
              value={widgetForm.type}
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
              disabled={widgetForm.canSubmit}
              type="submit"
              intent={Intent.PRIMARY}
              text="Save"
            />
          </div>
        </div>
      </form>
    </div >
  )

const mapDispatchToProps = (dispatch, { location }) => {
  const dashboardId = location.pathname.split('/')[2]
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

const mapStateToProps = ({ widgetForm }) => ({
  widgetForm
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form))
