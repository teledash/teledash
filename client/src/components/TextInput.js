import React from 'react'
import {
  FormGroup,
  Classes,
  InputGroup,
} from '@blueprintjs/core'

const TextInput = ({
  touched,
  errors,
  onChange,
  onBlur,
  value,
  label,
  name,
  placeholder
}) => (
  <FormGroup
    className={touched && errors ? Classes.INTENT_DANGER : ''}
    label={label}
    labelFor={name}
    required
  >
    <InputGroup
      className={touched && errors ? Classes.INTENT_DANGER : ''}
      onChange={onChange}
      value={value}
      name={name}
      onBlur={onBlur}
      placeholder={placeholder}
    />
    {touched && errors ? <div className={Classes.FORM_HELPER_TEXT}>{errors}</div> : ''}
  </FormGroup>
)

export default TextInput
