import React from 'react'
import PropTypes from 'prop-types'
import {
  MenuDivider,
  Menu,
  MenuItem,
} from '@blueprintjs/core'
import { Link } from 'react-router-dom'

const EntityMenu = ({ items, create, path }) => (
  <Menu>
    <MenuItem
      iconName="pt-icon-plus"
      onClick={create}
      text="Create"
    />
    <MenuDivider />
    {
      items.map(item => (
        <li key={item.id}>
          <Link
            to={`/${path}/${item.id}`}
            className="pt-menu-item pt-popover-dismiss"
          >
            {item.name}
          </Link>
        </li>
      ))
    }
  </Menu>
)

EntityMenu.propTypes = {
  items: PropTypes.array.isRequired
}

export default EntityMenu
