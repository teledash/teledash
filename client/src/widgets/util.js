import find from 'lodash/find'

/* Switch submited from "by name" to "by id" */
export function mapValueToSubmitWithId(oldValue, datasources) {
  const replaceNameWithId = id => value =>
    value.replace(/\[[^\]]+\]/, `[${id}]`)

  const getName = value => value
    .match(/\[[^\]]+\]/)[0] // Get the first appearance of a value in square brackets
    .replace(/[[\]]+/g, '') // Remove all square brackets

  const getIdByValue = value =>
    find(datasources, ds => ds.name === getName(value)).id

  const mapValueToSubmit = value =>
    replaceNameWithId(getIdByValue(value))(value)

  return mapValueToSubmit(oldValue)
}

export const replaceIdWithName = (value, name) =>
  value.replace(/\[[^\]]+\]/, `[${name}]`)
