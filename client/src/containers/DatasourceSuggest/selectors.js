import { flatten } from 'flat'
import reduce from 'lodash/reduce'

export function mapDatasourcesToValuesList(datasources) {

  // Get all datasources in an object with each key being equal to the name
  const datasourceByName = reduce(datasources, (acc, val) => {
    // Only add a datasource if the data property has child properties
    if (Object.keys(val.data).length > 0) {
      acc[val.name] = val.data
    }
    return acc
  }, {})

  // Deep flatten the object to one level and return the resulting keys.
  // They look like this: `datasourceName.prop1.prop2` etc...
  const keys = Object.keys(flatten(datasourceByName))
  // Convert object paths from `dot` notation to `bracket` notation
  return keys.map(key => key.split('.').map(prop => `[${prop}]`).join(''))
}
