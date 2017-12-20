import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Map user selected properties on datasource to the correct values
// The user does this during widget creation and editing
function selectData(data, fields) {
  if (Object.keys(data).length < 1 || !fields) return data
  const keys = Object.keys(fields)
  return keys.reduce((acc, key) => {
    const split = fields[key].split('.')
    // Map user defined properties to actual values here.
    const value = split.reduce((acc2, key2) => acc2[key2], data)
    if (value) acc[key] = value
    return acc
  }, {})
}

const DatasourceMapper = ({ name, widgetType, data, extraFields }) => (
  // FIXME: We add all extraFields here even if the component doesn't need all of them
  React.createElement(widgetType, { name, data, ...extraFields })
)


const mapStateToProps = ({ datasources }, { datasourceId, extraFields }) => ({
  data: datasources[datasourceId] &&
    selectData(datasources[datasourceId].data, extraFields)
})

export default connect(mapStateToProps, null)(DatasourceMapper)
