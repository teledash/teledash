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
  Link,
  withRouter
} from 'react-router-dom'

import {
  MenuHeader
} from '../../components'

const EditWidgetMenuItem = withRouter(({ widgetId, match }) => (
  <li>
    <Link
      to={`/dashboard/${match.params.dashboardId}/widget/${widgetId}`}
      className="pt-icon-edit pt-menu-item pt-popover-dismiss"
    >Edit
    </Link>
  </li >
))

const SettingsMenu = ({ widgetId, edit, duplicate, remove }) => (
  <Menu>
    <MenuHeader text="Settings" />
    <EditWidgetMenuItem widgetId={widgetId} displayname="EditWidgetMenuItem" />
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

const SettingsButton = ({ onClick, widgetId }) => (

  <Popover
    content={<SettingsMenu widgetId={widgetId} />}
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
