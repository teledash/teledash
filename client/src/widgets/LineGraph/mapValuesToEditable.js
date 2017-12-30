import { replaceIdWithName } from '../util'

export default function mapValuesToEditable(values, datasources) {
  if (Object.keys(datasources).length) {
    const { xValue, yValue } = values
    const xId = xValue.split(/[[\]]/).filter(Boolean)[0]
    const yId = yValue.split(/[[\]]/).filter(Boolean)[0]

    const xName = datasources[xId].name
    const yName = datasources[yId].name

    return {
      ...values,
      xValue: replaceIdWithName(xValue, xName),
      yValue: replaceIdWithName(yValue, yName),
    }
  }

  return values
}

