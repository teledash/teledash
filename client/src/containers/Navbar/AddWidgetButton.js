import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Classes
} from '@blueprintjs/core'
import './style.css'

const AddWidgetButton = ({ dashboardId }) => (
  <Link
    to={`/dashboard/${dashboardId}/widget/new`}
    className={`${Classes.BUTTON} ${Classes.MINIMAL} pt-icon-plus`}
  >Add Widget
  </Link>
)

const mapStateToProps = (state, { location }) => ({
  dashboardId: location.pathname.split('/')[2]
})

export default withRouter(connect(mapStateToProps)(AddWidgetButton))
