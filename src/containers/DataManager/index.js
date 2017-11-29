import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'


class DataManager extends Component {

  componentDidMount() {

  }

  render() {
    return <div></div>
  }
}

const mapStateToProps = ({ config }) => ({
  dataSources: config.dataSources,
})

DataManager.PropTypes = {
  dataSources: PropTypes.object
}

export default connect(mapStateToProps)(DataManager)

