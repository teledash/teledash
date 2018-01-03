import React from 'react'
import {
  Classes,
  Button,
  Intent
} from '@blueprintjs/core'
import config from '../../dashboard.config'
import {
  Select,
  TextInput
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
  mapTypeToFormFields,
  resetForm,
  setTouched,
  setFieldValue,
  editMode
}) => {
  return (
    <div className={`${Classes.DIALOG_BODY}`}>
      <form onSubmit={handleSubmit}>
        {
          // Only show `Select` to change widget type when in `widget creation mode`.
          !editMode ?
            <Select
              touched={touched.type}
              error={errors.type}
              value={values.type}
              onChange={(evt) => {
                // Reset the form on each change so that
                // inactive fields will be ignored
                resetForm()
                handleChange(evt)
              }}
              onBlur={handleBlur}
              options={config.widgetTypes}
              label="Type"
              name="type"
              placeholder="Enter a type..."
            />
            :
            null
        }


        {
          values.type ?
            <div>
              <TextInput
                touched={touched.name}
                errors={errors.name}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                label="Name"
                name="name"
                placeholder="Enter name..."
              />
              {
                // Add type specific form fields that need to be defined in `widgets` directory
                mapTypeToFormFields(
                  values.type,
                  handleChange,
                  handleBlur,
                  values,
                  errors,
                  touched,
                  setTouched,
                  setFieldValue,
                  dirty,
                  editMode
                )
              }
            </div> : null
        }
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
}

export default Form
