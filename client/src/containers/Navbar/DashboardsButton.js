import React from 'react'
import {
  Popover,
  Position
} from '@blueprintjs/core'
import { connect } from 'react-redux'
import { createDashboard } from './actions'
import EntityMenu from './EntityMenu'

const mapStateToProps = ({ dashboards }) => ({
  items: Object.keys(dashboards)
    .map(id => ({ id, name: dashboards[id].name }))
})

const mapDispatchToProps = dispatch => ({
  create: () => dispatch(createDashboard())
})

const DashboardMenuContainer =
  connect(mapStateToProps, mapDispatchToProps)(EntityMenu)

const DashboardsButton = () => (
  <Popover
    content={<DashboardMenuContainer path="dashboard" />}
    position={Position.BOTTOM_RIGHT}
  >
    <button
      className="pt-button pt-minimal pt-icon-dashboard"
    >Dashboards
    </button>
  </Popover>
)

export default DashboardsButton
