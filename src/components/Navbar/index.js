import React from 'react'
import PropTypes from 'prop-types'
import {
  Popover,
  Button,
  Position,
  Menu,
  MenuItem,
  MenuDivider
} from '@blueprintjs/core'

function handleClick(e: React.MouseEvent) {
        console.log("clicked", e.target)
    }

const AddWidgetMenu = () => (
  <Menu>
      <MenuItem
          iconName="pt-icon-path-search"
          onClick={handleClick}
          text="Map"
      />
      <MenuDivider />
      <MenuItem
          iconName="pt-icon-th"
          onClick={handleClick}
          text="Table"
      />
      <MenuDivider />
      <MenuItem
          iconName="pt-icon-timeline-line-chart"
          onClick={handleClick}
          text="Line Graph"
      />
      <MenuDivider />
      <MenuItem
          iconName="pt-icon-mobile-video"
          onClick={handleClick}
          text="Video"
      />
  </Menu>
)

const AddWidget = () => (
  <Popover content={<AddWidgetMenu/>} position={Position.BOTTOM_RIGHT}>
    <Button iconName="plus" text="Add Widget" />
  </Popover>
)

const Navbar = (props) => (
  <nav class="pt-navbar pt-dark modifier">
    <div class="pt-navbar-group pt-align-left">
      <div class="pt-navbar-heading">Teledash</div>
      {/* <input class="pt-input" placeholder="Search..." type="text" /> */}
    </div>
    <div class="pt-navbar-group pt-align-right">
      <AddWidget/>

      {/* <button class="pt-button pt-minimal pt-icon-user"></button>
      <button class="pt-button pt-minimal pt-icon-notifications"></button>
      <button class="pt-button pt-minimal pt-icon-cog"></button> */}
    </div>
  </nav>
  )

export default Navbar
