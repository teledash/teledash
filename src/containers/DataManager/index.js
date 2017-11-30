import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { GET_LINE_GRAPH_DATA } from './constants'

class DataManager extends Component {

  componentDidMount() {
    const {
      dataSources,
      // getMapData
    } = this.props
    const intervalIds = dataSources.map(source => {
      if (source.type === 'line_graph') {
        // return this.intervalCreator(GET_LINE_GRAPH_DATA, source.refresh)
      }
    })
    // 1. Iterate through props.dataSources
    // 2. make intervalCreators based on dataType
    // 3. intervalCreators call async actions
    // 4. intervals can be cancelled with clearInterval externally

  }

  intervalCreator(type, refresh) {
    return setInterval(() => {
      this.props.dispatch({ type })
    }, refresh)
  }

  render() {
    return <div></div>
  }
}

const mapStateToProps = ({ config: {dataSources} }) => ({
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

DataManager.PropTypes = {
  dataSources: PropTypes.array,
  dispatch: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(DataManager)

