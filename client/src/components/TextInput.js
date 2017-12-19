import React from 'react'
import {
  FormGroup,
  Classes,
  InputGroup,
} from '@blueprintjs/core'

const TextInput = ({
  touched,
  errors,
  handleChange,
  handleBlur,
  value,
  label,
  labelFor,
  name,
  placeholder
}) => (
  <FormGroup
    className={touched && errors ? Classes.INTENT_DANGER : ''}
    label={label}
    labelFor={labelFor}
    required
  >
    <InputGroup
      className={touched && errors ? Classes.INTENT_DANGER : ''}
      onChange={handleChange}
      value={value}
      name={name}
      onBlur={handleBlur}
      placeholder={placeholder}
    />
    {touched && errors ? <div className={Classes.FORM_HELPER_TEXT}>{errors}</div> : ''}
  </FormGroup>
)

export default TextInput
