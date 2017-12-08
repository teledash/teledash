import React from 'react'
import PropTypes from 'prop-types'
import {
  Popover,
  Position,
  Menu,
  MenuItem,
} from '@blueprintjs/core'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './style.css'
import {
  addWidget,
  addToTopRight,
} from './actions'


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
  <Popover content={
    <AddWidgetMenu addWidget={addWidget} />
  } position={Position.BOTTOM_RIGHT}>
    <button className="pt-button pt-minimal pt-icon-plus">Add Widget</button>
  </Popover>
)

AddWidgetButton.propTypes = {
  addWidget: PropTypes.func
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addWidget: type => {
    const id = ownProps.location.pathname.slice(-1)
    dispatch(addWidget(type, id))
    dispatch(addToTopRight(id))
  }
})

const AddWidgetButtonContainer =
  withRouter(connect(null, mapDispatchToProps)(AddWidgetButton))

export default AddWidgetButtonContainer
