import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  GET_LINE_GRAPH_DATA,
  ASSIGN_INTERVAL_ID
} from './constants'
import { lifecycle, compose, withProps } from 'recompose'

const DataManager = () => (
  <div></div>
)

const intervalCreator = (type, { refresh, url }, getData) => (
  setInterval(() => {
    getData({ type, url })
  }, refresh)
)

const mapStateToProps = ({ dataSources }) => ({
  dataSources: Object.keys(dataSources).map(key => (
    { id: key, ...dataSources[key] }
  )),
})

export const mapDispatchToProps = (dispatch) => ({
  getData: action => dispatch(action),
  assignIntervalId: (sourceKey, intervalId) => (
    dispatch({ type: ASSIGN_INTERVAL_ID, sourceKey, intervalId })
  ),
  // removeIntervalId: id => dispatch(id)
})

const enhance = compose(
  withProps({
    dataSources: PropTypes.array,
    dispatch: PropTypes.func
  }),
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    // 1. Iterate through props.dataSources.
    // 2. Make intervalCreators based on dataSource type.
    componentDidMount() {
      const { getData, assignIntervalId, dataSources } = this.props
      dataSources.forEach(source => {
        if (source.type === 'line_graph') {
          const intervalId = intervalCreator(
            GET_LINE_GRAPH_DATA,
            source,
            getData
          )
          assignIntervalId(source.id, intervalId)
        }
      })
    }
  })
)

export default enhance(DataManager)
