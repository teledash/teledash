import find from 'lodash/find'
import flow from 'lodash/flow'

/* Switch submited x and y values from "by name" to "by id" */
// REFACTOR ME: PLEASE!
export default function beforeSubmit(values, datasources) {
  const replaceNameWithId = id => value =>
    value.replace(/\[[^\]]+\]/, `[${id}]`)

  const removeQuotes = value => value.replace(/["]+/g, '')

  const convertToDotNotation = value =>
    value.split(/[[\]]/).filter(Boolean).join('.')

  const getName = value => value
    .match(/\[[^\]]+\]/)[0] // Get the first appearance of a value in square brackets
    .replace(/[[\]"]+/g, '') // Remove all strings and square brackets

  const getIdByValue = value =>
    find(datasources, ds => ds.name === getName(value)).id
  const mapValueToSubmit = value => flow(
    replaceNameWithId(getIdByValue(value)),
    convertToDotNotation,
    removeQuotes,
  )(value)

  const xValue = mapValueToSubmit(values.xValue)
  const yValue = mapValueToSubmit(values.yValue)

  // If no x or yValue return values as the same as they were passed in
  if (xValue && yValue) {
    return { ...values, xValue, yValue }
  }

  return values
}
