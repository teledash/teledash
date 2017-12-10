import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Classes
} from '@blueprintjs/core'

import {
  selectDashboard
} from './actions'

import './style.css'

const AddWidgetButton = ({ onClick }) => (
  <Link
    onClick={onClick}
    to="/widget/new"
    className={`${Classes.BUTTON} ${Classes.MINIMAL} pt-icon-plus`}
  >Add Widget</Link>
)

const mapDispatchToProps = (dispatch, { location }) => {
  const splitPath = location.pathname.split('/')
  const id = splitPath[splitPath.length - 1]

  return {
    onClick: () => dispatch(selectDashboard(id))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(AddWidgetButton))
