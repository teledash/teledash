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
    acc[key] = split.reduce((acc2, key2) => acc2[key2], data)
    return acc
  }, {})
}

const DatasourceMapper = ({ widgetType, data, extraFields }) => (
  React.createElement(widgetType, { data })
)


const mapStateToProps = ({ datasources }, { datasourceId, extraFields }) => ({
  data: datasources[datasourceId] &&
    datasources[datasourceId].data &&
    selectData(datasources[datasourceId].data, extraFields)
})

export default connect(mapStateToProps, null)(DatasourceMapper)
