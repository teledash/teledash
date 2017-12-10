import React from 'react'
import PropTypes from 'prop-types'
import {
  MenuDivider,
  Menu,
  MenuItem,
  Popover,
  Position
} from '@blueprintjs/core'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  createDashboard,
} from './actions'

const DashboardMenu = ({ dashboards }) => (
  <Menu>
    <MenuItem
      iconName="pt-icon-plus"
      onClick={createDashboard}
      text="Create"
    />
    <MenuDivider />
    {
      dashboards.map(db => (
        <li key={db.id}>
          <Link
            to={`/dashboard/${db.id}`}
            className="pt-menu-item pt-popover-dismiss"
          >
            {db.name}
          </Link>
        </li>
      ))
    }
  </Menu>
)

DashboardMenu.propTypes = {
  dashboards: PropTypes.object.isRequired
}

const mapStateToProps = ({ dashboards }) => ({
  dashboards: Object.keys(dashboards)
    .map(id => ({ id, name: dashboards[id].name }))
})

const mapDispatchToProps = dispatch => ({
  createDashboard: () => dispatch(createDashboard())
})

const DashboardMenuContainer =
  connect(mapStateToProps, mapDispatchToProps)(DashboardMenu)

const DashboardsButton = () => (
  <Popover
    content={<DashboardMenuContainer />}
    position={Position.BOTTOM_RIGHT}
  >
    <button
      className="pt-button pt-minimal pt-icon-dashboard"
    >Dashboards
    </button>
  </Popover>
)

export default DashboardsButton
