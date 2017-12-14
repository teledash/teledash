import React from 'react'
import {
  FormGroup,
  Classes,
} from '@blueprintjs/core'

const Select = ({
  touched,
  error,
  onBlur,
  onChange,
  value,
  options,
  label,
  labelFor,
  name,
  placeholder
}) => (
  <FormGroup
    className={touched && error ? Classes.INTENT_DANGER : ''}
    label={label}
    labelFor={labelFor}
  >
    <div
      className={`${Classes.FILL} ${Classes.SELECT} ${touched && error ? Classes.INTENT_DANGER : ''}`}
    >
      <select
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
      >
          <option value="">{placeholder}</option>
        {
          options.map(({ value, name }) =>
              <option key={value} value={value}>{name}</option>
          )
        }
      </select>
    </div>
    {error &&
      touched && <div className={Classes.FORM_HELPER_TEXT}>{error}</div>}
  </FormGroup>
)

export default Select
