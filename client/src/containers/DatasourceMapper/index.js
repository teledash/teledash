import React from 'react'
import { connect } from 'react-redux'

/*
  Convert user defined `datasource paths` to their corresponding values,
  then map those values to the props the widget is expecting.
*/
function selectData(datasources, fields) {
  // If there are datasources defined and this widget has `extraFields`
  if (Object.keys(datasources).length > 0 && fields) {
    // Map each store value to each field `path`
    return Object.keys(fields).reduce((acc, key) => {
      const split = fields[key].split('.')
      /* Check if field `path` contains an applicable datasource.
         FIXME: Warning this check has an edge case... There are some extra
         fields that are not dynamic. This could cause some unexpected behavior...
         For example, a user could unintentionally type an existing datasource path.
         */
      const data = datasources[split[0]] ? datasources[split[0]].data : null
      if (data) {
        // If the datasource.data is not empty proceed
        if (Object.keys(data).length > 0) {
          // Get the data value by adding a square bracket to each iteration.
          // Example:
          // 1: data[iss]
          // 2: data[iss][position]
          // 3: data[iss][position][latitude]
          // We slice to remove the datasourceId from the
          const value = split.slice(1).reduce((acc2, key2) => {
            if (acc2) return acc2[key2]
          }, data)
          // If there is a value, add it to the accumulator
          if (value) acc[key] = value
        }
      }
      return acc
    }, {})
  }
  // If the above iteration does not execute return an empty object
  return {}
}

const DatasourceMapper = ({ name, widgetType, data, extraFields }) => (
  // FIXME: We add all extraFields here even if the component doesn't need all of them
  React.createElement(widgetType, { name, data, ...extraFields })
)


const mapStateToProps = ({ datasources }, { extraFields }) => ({
  data: selectData(datasources, extraFields)
})

export default connect(mapStateToProps, null)(DatasourceMapper)
