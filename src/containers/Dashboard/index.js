import React, { Component } from 'react'
import {
  Mosaic,
  MosaicWindow,
  Corner,
  getNodeAtPath,
  getOtherDirection,
  getPathToCorner,
  MosaicDirection,
  MosaicNode,
  updateTree,
} from 'react-mosaic-component'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { connect } from 'react-redux'

import { selectWidget } from './selectors'
import './style.css'

class Dashboard extends Component {

  // addWindow(componentType) {
  //   this.addToTopRight(this.createWidget(componentType))
  // }

  // addToTopRight(widget) {
  //   let { currentNode } = this.props
  //   if (currentNode) {
  //     const path = getPathToCorner(currentNode, Corner.TOP_RIGHT)
  //     const parent = getNodeAtPath(currentNode, _.dropRight(path))
  //     const destination = getNodeAtPath(currentNode, path)
  //     const direction: MosaicDirection = parent ? getOtherDirection(parent.direction) : 'row'
  //     let first: MosaicNode
  //     let second: MosaicNode
  //     if (direction === 'row') {
  //       first = destination
  //       second = this.incWindowCount()
  //     } else {
  //       first = this.incWindowCount()
  //       second = destination
  //     }
  //     currentNode = updateTree(currentNode, [{
  //       path,
  //       spec: {
  //         $set: {
  //           direction, first, second,
  //         },
  //       },
  //     }])
  //   } else {
  //     currentNode = this.incWindowCount()
  //   }

  //   this.setState({ currentNode, widgets: [...this.props.widgets, widget] })
  // }

  render() {
    return (
        <Mosaic
          renderTile={(count, path) => (
            <MosaicWindow
              // createNode={this.incWindowCount.bind(this)}
              path={path}
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

  // incWindowCount() {
  //   const windowCount = this.props.windowCount + 1
  //   this.setState({windowCount})
  //   return windowCount
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
  // incrementWindowCount: () => dispatch(() => {}), // TODO: convert to redux
  onChange: () => dispatch(() => { }), // TODO: convert to redux
  // addWindow: () => dispatch(() => { }), // TODO: convert to redux
  // addToTopRight: () => dispatch(() => { }), // TODO: convert to redux
})

export default connect(mapStateToProps)(Dashboard)
