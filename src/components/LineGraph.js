import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis
} from 'react-vis'

import '../../node_modules/react-vis/dist/style.css'
import React from 'react'

class LineGraph extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [{ x: 0, y: 8 }],
    }
  }

  componentDidMount() {
    setInterval(() => {
      const randomY = Math.random() > 0.4 ? Math.random() : -Math.random()
      const coord = {
        x: this.state.data[this.state.data.length - 1].x + 1,
        y: this.state.data[this.state.data.length - 1].y + randomY
      }
      this.setState({
        data: [...this.state.data, coord]
      })
    }, 1000)
  }

  render() {
    return (
      <XYPlot height={200} width={425}>
        <LineSeries data={this.state.data} />
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
      </XYPlot>
    )
  }
}

export default LineGraph
