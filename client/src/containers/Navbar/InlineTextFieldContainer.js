import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './style.css'
import { InlineTextField } from '../../components'
import { updateDashboardName } from './actions'

const mapStateToProps = ({ dashboards }, { location }) => {
  const param = location.pathname.split('/')[2]
  return {
    value: dashboards[param] ? dashboards[param].name : null
  }
}

const mapDispatchToProps = (dispatch, { location }) => {
  const id = location.pathname.split('/')[2]
  return {
    submit: name =>
      dispatch(updateDashboardName(name, id))
  }
}

const InlineTextFieldContainer =
  withRouter(connect(mapStateToProps, mapDispatchToProps)(InlineTextField))

export default InlineTextFieldContainer
