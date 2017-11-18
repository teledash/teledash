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

import './App.css'

let windowCount = 4

export class App extends PureComponent {
  state = {
    currentNode: {
      direction: 'row',
      first: {
        direction: 'column',
        first: 1,
        second: 2,
      },
      second: {
        direction: 'column',
        first: 3,
        second: 4,
      },
    },
    currentTheme: 'Blueprint Dark',
    widgetMap: {
      '1': <Map />,
      '2': <LineGraph />,
      '3': <Video />,
      '4': <div></div>
    }
  }

  addWindow(componentName) {
    switch(componentName) {
      case 'map':
        this.addToTopRight(<Map />)
        break
      case 'line_graph':
        this.addToTopRight(<LineGraph />)
        break
      case 'video':
        this.addToTopRight(<Video />)
        break
      default: this.addToTopRight(<LineGraph />)
    }
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
        second = ++windowCount
      } else {
        first = ++windowCount
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
      currentNode = ++windowCount
    }

    const newWidgetMap = {...this.state.widgetMap, }
    newWidgetMap[windowCount] = widget

    this.setState({ widgetMap: newWidgetMap })
    this.setState({ currentNode })
  }

  render() {
    return (
        <div className='dashboard'>
        <Navbar addWindow={this.addWindow.bind(this)}/>
          <Mosaic
            renderTile={(count, path) => (
              <MosaicWindow
                createNode={this.createNode}
                path={path}
              >
                <div className='window'>
                  {this.state.widgetMap[count + '']}
                </div>
              </MosaicWindow>
            )}
            zeroStateView={<MosaicZeroState createNode={this.createNode} />}
            value={this.state.currentNode}
            onChange={this.onChange.bind(this)}
            className="mosaic-blueprint-theme pt-dark"
          />
        </div>
    )
  }

  onChange (currentNode) {
    return this.setState({ currentNode })
  }

  createNode() {
    return ++windowCount
  }
}

export default App
