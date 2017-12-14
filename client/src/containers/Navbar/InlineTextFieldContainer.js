import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './style.css'
import { InlineTextField } from '../../components'
import { updateDashboardName } from './actions'

const mapStateToProps = ({ dashboards }, { location }) => {
  const id = location.pathname.split('/')[2]
  return {
    value: dashboards[id] ? dashboards[id].name : null
  }
}

const mapDispatchToProps = (dispatch, { match }) => ({
  submit: name =>
    dispatch(updateDashboardName(name, match.params.dashboardId))
})

const InlineTextFieldContainer =
  withRouter(connect(mapStateToProps, mapDispatchToProps)(InlineTextField))

export default InlineTextFieldContainer
