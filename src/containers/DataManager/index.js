import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { GET_LINE_GRAPH_DATA } from './constants'
import axios from 'axios'
import { lifecycle, compose } from 'recompose'

const DataManager = () => (
  <div></div>
)

DataManager.PropTypes = {
  dataSources: PropTypes.array,
  dispatch: PropTypes.func
}

const intervalCreator = (type, refresh, promise, dispatch) => {
  return setInterval(() => {
    dispatch({ type, promise })
  }, refresh)
}

const mapStateToProps = ({ dataSources }) => ({
  dataSources: Object.keys(dataSources).map(key => (
    {id: key, ...dataSources[key]}
  )),
})

export const mapDispatchToProps = (dispatch) => ({
  dispatch: action => dispatch(action),
  // getMapData: action => dispatch(action),
  // addIntervalIds: ids => dispatch(ids),
  // addIntervalId: id => dispatch(id),
  // removeIntervalId: id => dispatch(id)
})

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    // 1. Iterate through props.dataSources
    // 2. make intervalCreators based on dataType
    // 3. intervalCreators call async actions
    // 4. intervals can be cancelled with clearInterval externally
    componentDidMount () {
      const intervalIds = this.props.dataSources.map(source => {
        if (source.type === 'line_graph') {
          return intervalCreator(
            GET_LINE_GRAPH_DATA,
            source.refresh,
            axios.get('/api/ '),
            this.props.dispatch
          )
        }
      })
    }
}),

)

export default enhance(DataManager)

