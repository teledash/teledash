import LineGraphFormFields from '../../widgets/LineGraph/formFields'
import validateLineGraph from '../../widgets/LineGraph/formFieldValidation'
import React from 'react'

export function mapTypeToFormFields(
  type,
  handleChange,
  handleSubmit,
  values,
  errors
) {
  const mapper = {
    line_graph: LineGraphFormFields
  }

  if (mapper[type])
    return React.createElement(mapper[type], {
      handleChange,
      handleSubmit,
      values,
      errors
    })
}

export function mapTypeToFormErrors(values) {
  const { type } = values
  const mapper = {
    line_graph: () => validateLineGraph(
      values.xLabel
    )
  }
  if (typeof mapper[type] === 'function') return mapper[type]()
}
