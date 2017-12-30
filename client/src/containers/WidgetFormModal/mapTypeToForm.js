import React from 'react'

import {
  MapFormFields,
  validateMapFormFields,
  beforeSubmitMap
} from '../../widgets/Map'

import {
  LineGraphFormFields,
  validateLineGraphFormFields,
  beforeSubmitLineGraph
} from '../../widgets/LineGraph'

import {
  VideoFormFields,
  validateVideoFormFields,
} from '../../widgets/Video'


export function mapTypeToFormFields(
  type,
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  setTouched,
  setFieldValue,
  dirty,
  editMode
) {
  const mapper = {
    line_graph: LineGraphFormFields,
    map: MapFormFields,
    video: VideoFormFields
  }

  if (mapper[type])
    return React.createElement(mapper[type], {
      handleChange,
      handleBlur,
      values,
      errors,
      touched,
      setTouched,
      setFieldValue,
      dirty,
      editMode
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
      values.markerLat,
      values.markerLong
    ),
    video: () => validateVideoFormFields(values.datasourceId)
  }
  if (typeof mapper[type] === 'function') return mapper[type]()
}

export function beforeSubmit(values, datasources) {
  const { type } = values
  const mapper = {
    line_graph: () => beforeSubmitLineGraph(values, datasources),
    map: () => beforeSubmitMap(values, datasources)
  }
  if (typeof mapper[type] === 'function') return mapper[type]()
  return values
}
