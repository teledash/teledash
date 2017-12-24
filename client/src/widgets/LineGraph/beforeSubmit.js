import find from 'lodash/find'

/* Switch submited x and y values from "by name" to "by id" */
export default function beforeSubmit(values, datasources) {
  const getName = value => value
    .match(/\[[^\]]+\]/)[0] // Get the first appearance of a value in square brackets
    .replace(/[\[\]"]+/g, '') // Remove all strings and square brackets

  const replaceNameWithId = (value, id) =>
    value.replace(/\[[^\]]+\]/, `[${id}]`)

  const removeQuotes = value => value.replace(/["]+/g, '')

  const xId = find(datasources, ds => ds.name === getName(values.xValue)).id
  const yId = find(datasources, ds => ds.name === getName(values.yValue)).id

  const xValue = removeQuotes(replaceNameWithId(values.xValue, xId))
  const yValue = removeQuotes(replaceNameWithId(values.yValue, yId))

  // If no x or yValue return values as the same as they were passed in
  if (xValue && yValue) {
    return { ...values, xValue, yValue }
  }

  return values
}
