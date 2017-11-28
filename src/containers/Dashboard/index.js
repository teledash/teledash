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
              // createNode={this.incWindowCount.bind(this)}
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
          // onChange={this.onChange.bind(this)}
          className={this.props.theme}
        />
    )
  }
  // onChange(currentNode) {
  //   return this.setState({ currentNode })
  // }
}

Dashboard.PropTypes = {
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
    widgets: state.config.widgets.map(widget => selectWidget(widget.type))
  }
}

export const mapDispatchToProps = (dispatch) => ({
  onChange: currentNode => dispatch(currentNode => dispatch(onDashboardChange(currentNode))),
})

export default connect(mapStateToProps)(Dashboard)
