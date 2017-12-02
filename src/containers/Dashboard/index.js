import React from 'react'
import {
  Mosaic,
  MosaicWindow
} from 'react-mosaic-component'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SettingsButton from './SettingsButton'
import { onDashboardChange } from './actions'
import widgetFactory from './widgetFactory'
import './style.css'

const Dashboard = ({ widgets, currentNode, onChange, theme, dataSources }) => {

  const widgetsJSX = widgets.map(widget =>
    widgetFactory(widget.type, widget.name, dataSources[widget.source].data)
  )

  return (
    <Mosaic
      renderTile={(count, path) => (
        <MosaicWindow
          path={path}
          toolbarControls={<SettingsButton />}
        >
          <div className='window'>
            {widgetsJSX[count - 1]}
          </div>
        </MosaicWindow>
      )}
      zeroStateView={<div></div>}
      value={currentNode}
      onChange={onChange}
      className={theme}
    />
  )
}

Dashboard.PropTypes = {
  onChange: PropTypes.func,
  windowCount: PropTypes.number,
  currentNode: PropTypes.object,
  theme: PropTypes.string,
  widgets: PropTypes.array
}

export const mapStateToProps = ({ config, dataSources }) => {
  return {
    windowCount: config.windowCount,
    currentNode: config.currentNode,
    theme: config.theme,
    widgets: config.widgets,
    dataSources
  }
}

export const mapDispatchToProps = (dispatch) => ({
  onChange: currentNode => dispatch(onDashboardChange(currentNode)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
