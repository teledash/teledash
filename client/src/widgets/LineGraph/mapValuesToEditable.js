import { replaceIdWithName } from '../util'

export default function mapValuesToEditable(values, datasources) {
  const { xValue, yValue } = values

  const xId = xValue.split(/[[\]]/).filter(Boolean)[0]
  const yId = yValue.split(/[[\]]/).filter(Boolean)[0]

  const xName = datasources[xId] ? datasources[xId].name : null
  const yName = datasources[yId] ? datasources[yId].name : null

  return {
    ...values,
    xValue: xName ? replaceIdWithName(xValue, xName) : xValue,
    yValue: yName ? replaceIdWithName(yValue, yName) : yValue
  }
}

