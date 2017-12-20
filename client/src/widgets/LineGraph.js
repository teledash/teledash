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
      data: [{ x: 0, y: 8 }]
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data &&
      typeof nextProps.data.x === 'number' &&
      typeof nextProps.data.y === 'number'
    )
      this.setState({
        data: this.state.data.concat({
          x: +nextProps.data.x,
          y: +nextProps.data.y
        })
      })
  }

  render() {
    return (
      <XYPlot height={200} width={425}>
        <LineSeries data={this.state.data} />
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis title={this.props.xLabel} />
        <YAxis title={this.props.yLabel} />
      </XYPlot>
    )
  }
}

LineGraph.propTypes = {
  name: PropTypes.string,
  xLabel: PropTypes.string,
  yLabel: PropTypes.string,
  data: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
}

export default LineGraph
