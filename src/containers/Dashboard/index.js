import React, { Component } from 'react'
import {
  Mosaic,
  MosaicWindow
} from 'react-mosaic-component'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SettingsButton from './SettingsButton'
import { onDashboardChange } from './actions'
import { selectWidget } from './selectors'
import './style.css'

class Dashboard extends Component {
  render() {
    return (
        <Mosaic
          renderTile={(count, path) => (
            <MosaicWindow
            path={path}
            toolbarControls={<SettingsButton />}
            >
              <div className='window'>
                {this.props.widgets[count - 1]}
              </div>
            </MosaicWindow>
          )}
          zeroStateView={<div></div>}
          value={this.props.currentNode}
          onChange={this.props.onChange}
          className={this.props.theme}
        />
    )
  }
}

Dashboard.PropTypes = {
  onChange: PropTypes.func,
  windowCount: PropTypes.number,
  currentNode: PropTypes.object,
  theme: PropTypes.string,
  widgets: PropTypes.array
}

export const mapStateToProps = state => {
  return {
    windowCount: state.config.windowCount,
    currentNode: state.config.currentNode,
    theme: state.config.theme,
    widgets: state.config.widgets.map(widget =>
      selectWidget(widget.type, widget.name, state.config.dataSources[widget.source].data)
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  onChange: currentNode => dispatch(onDashboardChange(currentNode)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
