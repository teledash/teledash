import React from 'react'
import PropTypes from 'prop-types'
import {
  Popover,
  Position,
  Menu,
  MenuItem,
  MenuDivider
} from '@blueprintjs/core'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { withRouter, Link } from 'react-router-dom'
import './style.css'
import { InlineTextField } from '../../components'
import { addWidget, addToTopRight, createDashboard } from './actions'

const DashboardMenu = ({ dashboards, createDashboard, goToDashboard }) => (
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
            className="pt-menu-item pt-popover-dismiss">
            {db.name}
          </Link>
        </li>
      ))
    }
  </Menu>
)

const DashboardMenuContainer = connect(({ dashboards }) => ({
  dashboards: Object.keys(dashboards)
    .map(id => ({ id, name: dashboards[id].name }))
}), dispatch => ({
  goToDashboard: link => dispatch(push(`/dashboard/${link}`)),
  createDashboard: () => dispatch(createDashboard())
}))(DashboardMenu)


const DashboardsButton = () => (
  <Popover content={<DashboardMenuContainer />} position={Position.BOTTOM_RIGHT}>
    <button className="pt-button pt-minimal pt-icon-dashboard">Dashboards</button>
  </Popover>
)


const AddWidgetMenu = ({ addWidget }) => (
  <Menu>
    <MenuItem
      iconName="pt-icon-path-search"
      onClick={() => addWidget('map')}
      text="Map"
    />
    <MenuItem
      iconName="pt-icon-timeline-line-chart"
      onClick={() => addWidget('line_graph')}
      text="Line Graph"
    />
    <MenuItem
      iconName="pt-icon-mobile-video"
      onClick={() => addWidget('video')}
      text="Video"
    />
  </Menu>
)

const AddWidgetButton = ({ addWidget }) => (
  <Popover content={<AddWidgetMenu addWidget={addWidget} />} position={Position.BOTTOM_RIGHT}>
    <button className="pt-button pt-minimal pt-icon-plus">Add Widget</button>
  </Popover>
)

AddWidgetButton.propTypes = {
  addWidget: PropTypes.func
}

const AddWidgetButtonContainer = withRouter(connect(null, (dispatch, ownProps) => ({
  addWidget: type => {
    const id = ownProps.location.pathname.slice(-1)
    dispatch(addWidget(type, id))
    dispatch(addToTopRight(id))
  }
}))(AddWidgetButton))

const Navbar = ({ dashboardName }) => (
  <nav className="pt-navbar pt-dark modifier">
    <div className="pt-navbar-group pt-align-left">
      <div className="pt-navbar-heading">
        <InlineTextField value={dashboardName} />
      </div>
    </div>
    <div className="pt-navbar-group pt-align-right">
      <div className="pt-navbar-group pt-align-right">
        <AddWidgetButtonContainer />
        <button className="pt-button pt-minimal pt-icon-database">Datasources</button>
        <DashboardsButton />
        <span className="pt-navbar-divider"></span>
        <button className="pt-button pt-minimal pt-icon-user"></button>
        <button className="pt-button pt-minimal pt-icon-notifications"></button>
        <button className="pt-button pt-minimal pt-icon-cog"></button>
      </div>
    </div>
  </nav>
)

export default connect(({ dashboards, router }) => {
  const id = router.location.pathname.slice(-1)
  return ({
    dashboardName: dashboards[id] ? dashboards[id].name : null
  })
})(Navbar)
