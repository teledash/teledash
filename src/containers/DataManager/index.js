import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'


class DataManager extends Component {

  componentDidMount() {
    const intervalIds = this.props.dataSources.map(dataSource => {
      if (dataSource.type === 'line_graph') {
        return setInterval(() => {
          // start line graph fetcher
        })
      }

      if (dataSource.type === 'line_graph') {
        return setInterval(() => {
          // start line graph fetcher
        })
      }
    })
    // 1. Iterate through props.dataSources
    // 2. make intervalCreators based on dataType
    // 3. intervalCreators call async actions
    // 4. intervals can be cancelled with clearInterval externally
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

DataManager.PropTypes = {
  dataSources: PropTypes.array
}

export default connect(mapStateToProps)(DataManager)

