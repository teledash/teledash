import { mapValueToSubmitWithId } from '../util'

/* Switch submited x and y values from "by name" to "by id" */
export default function beforeSubmit(values, datasources) {
  const xValue = mapValueToSubmitWithId(values.xValue, datasources)
  const yValue = mapValueToSubmitWithId(values.yValue, datasources)

  // If no x or yValue return values as the same as they were passed in
  if (xValue && yValue) {
    return { ...values, xValue, yValue }
  }

  return values
}
