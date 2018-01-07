import React from 'react'
import {
  Popover,
  Position
} from '@blueprintjs/core'
import { push } from 'react-router-redux'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import EntityMenu from './EntityMenu'

const mapStateToProps = ({ datasources }) => ({
  items: Object.keys(datasources)
    .map(id => ({ id, name: datasources[id].name }))
})

const mapDispatchToProps = dispatch => ({
  create: () => dispatch(push('/dashboard/1/datasource/new'))
})

const DatasourceMenuContainer =
  connect(mapStateToProps, mapDispatchToProps)(EntityMenu)

const DatasourcesButton = ({ match }) => (
  <Popover
    content={
      <DatasourceMenuContainer
        path={`dashboard/${match.params.dashboardId}/datasource`}
      />
    }
    position={Position.BOTTOM_RIGHT}
  >
    <button
      className="pt-button pt-minimal pt-icon-database"
    >Datasources
    </button>
  </Popover>
)

export default withRouter(DatasourcesButton)
