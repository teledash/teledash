import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { lifecycle, compose, withProps } from 'recompose'

import {
  GET_REST_DATA,
} from '../../constants'
import {
  assignIntervalId,
} from './actions'


const DataManager = () => (
  <div></div>
)

const intervalCreator = (type, { refresh, url, id }, getData) => (
  setInterval(() => {
    getData({ type, url, id })
  }, refresh)
)

const mapStateToProps = ({ datasources }) => ({
  datasources: Object.keys(datasources).map(key => (
    { id: key, ...datasources[key] }
  )),
})

export const mapDispatchToProps = dispatch => ({
  getData: action => dispatch(action),
  setIntervalId: (datasourceId, intervalId) => (
    dispatch(assignIntervalId(datasourceId, intervalId))
  )
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
    componentWillReceiveProps(nextProps) {
      const { getData, setIntervalId } = this.props
      if (this.props.datasources.length !== nextProps.datasources.length) {
        // Clear old intervalIds
        this.props.datasources.forEach(({ intervalId }) => {
          clearInterval(intervalId)
        })
        // Assign new intervalIds
        nextProps.datasources.forEach((source) => {
          if (source.type === 'rest' && source.name !== 'Temperature') {
            const intervalId = intervalCreator(
              GET_REST_DATA,
              source,
              getData
            )
            setIntervalId(source.id, intervalId)
          }
        })
      }
    }
  })
)

export default enhance(DataManager)

