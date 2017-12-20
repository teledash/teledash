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
  datasources,
  mapTypeToFormFields
}) => {

  return (
    <div className={`${Classes.DIALOG_BODY}`}>
      <form onSubmit={handleSubmit}>
        <TextInput
          touched={touched.name}
          errors={errors.name}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          label="Name"
          labelFor="name"
          name="name"
          placeholder="Enter name..."
        />

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

        {
          // Add type specific form fields that need to be defined in `widgets` directory
          mapTypeToFormFields(
            values.type,
            handleChange,
            handleBlur,
            values,
            errors
          )
        }

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
}

export default Form
