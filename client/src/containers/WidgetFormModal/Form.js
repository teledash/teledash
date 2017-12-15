import React from 'react'
import {
  FormGroup,
  Classes,
  InputGroup,
  Button,
  Intent
} from '@blueprintjs/core'
import config from '../../dashboard.config'
import { lifecycle } from 'recompose'

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

export default Form
