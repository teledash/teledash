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
import './style.css'
import { addWidget, addToTopRight } from './actions'

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

const EntityMenu = ({ addWidget }) => (
  <Menu>
    <MenuItem
      iconName="pt-icon-plus"
      onClick={() => {}}
      text="Create"
    />
    <MenuDivider />
    {/* <MenuItem
      iconName="pt-icon-timeline-line-chart"
      onClick={() => addWidget('line_graph')}
      text="Line Graph"
    />
    <MenuItem
      iconName="pt-icon-mobile-video"
      onClick={() => addWidget('video')}
      text="Video"
    /> */}
  </Menu>
)

const AddWidget = ({ addWidget }) => (
  <Popover content={<AddWidgetMenu addWidget={addWidget} />} position={Position.BOTTOM_RIGHT}>
    <button class="pt-button pt-minimal pt-icon-plus">Add Widget</button>
  </Popover>
)

const Dashboards = ({ addEntity }) => (
  <Popover content={<EntityMenu addWidget={addEntity} />} position={Position.BOTTOM_RIGHT}>
    <button class="pt-button pt-minimal pt-icon-dashboard">Dashboards</button>
  </Popover>
)

const Navbar = ({ addWidget }) => (
  <nav className="pt-navbar pt-dark modifier">
    <div class="pt-navbar-group pt-align-left">
      <div class="pt-navbar-heading">Teledash</div>
    </div>
    <div className="pt-navbar-group pt-align-right">
      <div class="pt-navbar-group pt-align-right">
        <AddWidget addWidget={addWidget} />
        <button class="pt-button pt-minimal pt-icon-database">Datasources</button>
        <Dashboards addWidget={addWidget} />
        <span class="pt-navbar-divider"></span>
        <button class="pt-button pt-minimal pt-icon-user"></button>
        <button class="pt-button pt-minimal pt-icon-notifications"></button>
        <button class="pt-button pt-minimal pt-icon-cog"></button>
      </div>
    </div>
  </nav>
  )

Navbar.propTypes = {
  addWidget: PropTypes.func
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addWidget: type => {
    dispatch(addWidget(type))
    dispatch(addToTopRight())
  }
})

export default connect(null, mapDispatchToProps)(Navbar)
