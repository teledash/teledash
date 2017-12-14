import React from 'react'
import PropTypes from 'prop-types'
import {
  Menu,
  MenuItem,
  Popover,
  Position,
  MenuDivider,
} from '@blueprintjs/core'

import {
  MenuHeader
} from '../../components'

const SettingsMenu = ({ edit, duplicate, remove }) => (
  <Menu>
    <MenuHeader text="Settings" />
    <MenuItem
      iconName="pt-icon-edit"
      onClick={edit}
      text="Edit"
    />
    <MenuItem
      iconName="pt-icon-duplicate"
      onClick={duplicate}
      text="Duplicate"
    />
    <MenuDivider />
    <MenuItem
      className="pt-intent-danger"
      iconName="pt-icon-trash"
      onClick={remove}
      text="Delete"
    />
  </Menu>
)

const SettingsButton = ({ onClick }) => (

  <Popover
    content={<SettingsMenu />}
    position={Position.BOTTOM_RIGHT}
  >
    <button
      onClick={onClick}
      className="mosaic-default-control pt-button pt-minimal pt-icon-more"
    />
  </Popover>
)

SettingsButton.PropTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
}

export default SettingsButton
