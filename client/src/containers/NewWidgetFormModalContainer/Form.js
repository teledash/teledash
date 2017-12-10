import React from 'react'
import {
  FormGroup,
  Classes,
  InputGroup,
  Button,
  Intent
} from '@blueprintjs/core'

import { connect } from 'react-redux'

const Form = ({
  types,
  submit,
  onNameFieldChange,
  onTypeFieldChange,
  type,
  name
}) => (
    < div className={`${Classes.DIALOG_BODY} ${Classes.DARK}`}>
      <form onSubmit={submit}>
        <FormGroup
          className={`${Classes.DARK}`}
          label="Name"
          labelFor="name"
          required={true}
        >
          <InputGroup
            className={`${Classes.DARK}`}
            id="name"
            name="name"
            placeholder="Enter name..."
          />
        </FormGroup>
        <FormGroup
          className={`${Classes.DARK}`}
          label="Type"
          labelFor="type"
          required={true}
        >
          <div className={`${Classes.DARK} ${Classes.FILL} ${Classes.SELECT}`}>
            <select defaultValue="" name="type">
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
              text="Cancel" />
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

const mapDispatchToProps = dispatch => ({
  submit: (event) => {
    event.preventDefault()
    dispatch()
  }
})

const mapStateToProps = ({ addWidgetForm }) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Form)


