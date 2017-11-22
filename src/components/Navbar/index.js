import React from 'react'
import PropTypes from 'prop-types'
import {
  Popover,
  Button,
  Position,
  Menu,
  MenuItem
} from '@blueprintjs/core'
import './style.css'

// import DataManager from '../DataManager'

const AddWidgetMenu = ({ addWidget }) => (
  <Menu>
      <MenuItem
          iconName="pt-icon-path-search"
          onClick={() => addWidget('map')}
          text="Map"
      />
      {/* <MenuItem
          iconName="pt-icon-th"
          onClick={() => addWidget('table')}
          text="Table"
      /> */}
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

const AddWidget = ({ addWidget }) => (
  <Popover content={<AddWidgetMenu addWidget={addWidget} />} position={Position.BOTTOM_RIGHT}>
    <Button iconName="plus" text="Add Widget" />
  </Popover>
)

const Navbar = ({ addWindow }) => (
  <nav className="pt-navbar pt-dark modifier">
    <div className="pt-navbar-group pt-align-left">
      <div className="pt-navbar-heading">Teledash</div>
      {/* <input class="pt-input" placeholder="Search..." type="text" /> */}
    </div>
    <div className="pt-navbar-group pt-align-right">
      <AddWidget addWidget={addWindow} />
      {/* <DataManager /> */}

      {/* <button class="pt-button pt-minimal pt-icon-user"></button>
      <button class="pt-button pt-minimal pt-icon-notifications"></button>
      <button class="pt-button pt-minimal pt-icon-cog"></button> */}
    </div>
  </nav>
  )

Navbar.propTypes = {
  addWindow: PropTypes.func
}

export default Navbar
