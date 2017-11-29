import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis
} from 'react-vis'
import React from 'react'
import PropTypes from 'prop-types'
import '../../node_modules/react-vis/dist/style.css'


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
    }, 5000)
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

LineGraph.propTypes = {
  title: PropTypes.string,
  data: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
}

export default LineGraph
