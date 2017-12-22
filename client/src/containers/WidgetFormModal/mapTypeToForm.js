import {
  MapFormFields,
  validateMapFormFields
} from '../../widgets/Map'

import {
  LineGraphFormFields,
  validateLineGraphFormFields
} from '../../widgets/LineGraph'

import React from 'react'

export function mapTypeToFormFields(
  type,
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  setTouched,
  setFieldValue
) {
  const mapper = {
    line_graph: LineGraphFormFields,
    map: MapFormFields
  }

  if (mapper[type])
    return React.createElement(mapper[type], {
      handleChange,
      handleBlur,
      values,
      errors,
      touched,
      setTouched,
      setFieldValue
    })
}

export function mapTypeToFormErrors(values) {
  const { type } = values
  const mapper = {
    line_graph: () => validateLineGraphFormFields(
      values.xValue,
      values.yValue,
      values.xLabel,
      values.yLabel
    ),
    map: () => validateMapFormFields(
      values.mapCenterLat
    )
  }
  if (typeof mapper[type] === 'function') return mapper[type]()
}
