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

const mapStateToProps = ({ datasources }) => ({
  datasources: Object.keys(datasources).map(key => (
    { id: key, ...datasources[key] }
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
    datasources: PropTypes.array,
    dispatch: PropTypes.func
  }),
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    // 1. Iterate through props.datasources.
    // 2. Make intervalCreators based on dataSource type.
    componentDidMount() {
      const { getData, assignIntervalId, datasources } = this.props
      datasources.forEach(source => {
        if (source.type === '') {
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

