import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const DatasourceMapper = ({ widget, data }) => (
  React.createElement(widget, { data })
)

const mapStateToProps = ({ datasources }, { datasourceId }) => ({
  data: datasources[datasourceId] && datasources[datasourceId].data && datasources[datasourceId].data.iss_position
})

export default connect(mapStateToProps, null)(DatasourceMapper)
