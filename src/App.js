import React, { PureComponent } from 'react'
import {
  Mosaic,
  MosaicWindow,
  MosaicZeroState,
  Corner,
  getNodeAtPath,
  getOtherDirection,
  getPathToCorner,
  MosaicDirection,
  MosaicNode,
  updateTree,
} from 'react-mosaic-component'
import {
  LineGraph,
  Map,
  Video,
  Navbar
} from './components'
import _ from 'lodash'

import config from './dashboard.config'

import './App.css'

export class App extends PureComponent {
  state = {
    windowCount: config.windowCount,
    currentNode: config.currentNode,
    theme: config.theme,
    widgets: config.widgets.map(widget => this.createWidget(widget.type))
  }

  createWidget(type) {
    const mapper = {
      map: <Map />,
      line_graph: <LineGraph />,
      video: <Video />
    }

    return mapper[type]
  }

  addWindow(componentType) {
    this.addToTopRight(this.createWidget(componentType))
  }

  addToTopRight(widget) {
    let { currentNode } = this.state
    if (currentNode) {
      const path = getPathToCorner(currentNode, Corner.TOP_RIGHT)
      const parent = getNodeAtPath(currentNode, _.dropRight(path))
      const destination = getNodeAtPath(currentNode, path)
      const direction: MosaicDirection = parent ? getOtherDirection(parent.direction) : 'row'
      let first: MosaicNode
      let second: MosaicNode
      if (direction === 'row') {
        first = destination
        second = this.incWindowCount()
      } else {
        first = this.incWindowCount()
        second = destination
      }
      currentNode = updateTree(currentNode, [{
        path,
        spec: {
          $set: {
            direction, first, second,
          },
        },
      }])
    } else {
      currentNode = this.incWindowCount()
    }

    this.setState({ currentNode, widgets: [...this.state.widgets, widget] })
  }

  render() {
    return (
      <div className='dashboard'>
        <Navbar addWindow={this.addWindow.bind(this)} />
        <Mosaic
          renderTile={(count, path) => (
            <MosaicWindow
              createNode={this.incWindowCount.bind(this)}
              path={path}
            >
              <div className='window'>
                {this.state.widgets[count - 1]}
              </div>
            </MosaicWindow>
          )}
          zeroStateView={<div></div>}
          value={this.state.currentNode}
          onChange={this.onChange.bind(this)}
          className="mosaic-blueprint-theme pt-dark"
        />
      </div>
    )
  }

  onChange(currentNode) {
    return this.setState({ currentNode })
  }

  incWindowCount() {
    const windowCount = this.state.windowCount + 1
    this.setState({windowCount})
    return windowCount
  }
}

export default App
