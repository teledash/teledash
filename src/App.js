import React, { PureComponent } from 'react'
import {
  Mosaic,
  MosaicWindow,
  MosaicZeroState,
} from 'react-mosaic-component'
import LineGraph from './components/LineGraph'
import Map from './components/Map'
import Video from './components/Video'
import './styles/react-mosaic-component.css'
import './App.css'

let windowCount = 4

const ELEMENT_MAP = {
  '1': <Map />,
  '2': <LineGraph />,
  '3': <Video />,
  '4': <div></div>
}

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
  }

  render() {
    return (
      <div className='dashboard'>
        <Mosaic
          renderTile={(count, path) => (
            <MosaicWindow
              createNode={this.createNode}
              path={path}
            >
              <div className='window'>
                {ELEMENT_MAP[count + '']}
              </div>
            </MosaicWindow>
          )}
          zeroStateView={<MosaicZeroState createNode={this.createNode} />}
          value={this.state.currentNode}
          onChange={this.onChange.bind(this)}
          className="mosaic-blueprint-theme pt-dark"
        />
      </div>
    );
  }

  onChange (currentNode) {
    return this.setState({ currentNode })
  }

  createNode() {
    return ++windowCount
  }
}

export default App;
