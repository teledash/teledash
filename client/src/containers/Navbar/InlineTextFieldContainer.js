import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './style.css'
import { InlineTextField } from '../../components'
import { updateDashboardName } from './actions'

const mapStateToProps = ({ selectedDashboard, dashboards }, ownProps) => {
  return ({ value: dashboards[selectedDashboard] ? dashboards[selectedDashboard].name : null })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  submit: name => dispatch(
    updateDashboardName(name, ownProps.location.pathname.slice(-1))
  )
})

const InlineTextFieldContainer =
  withRouter(connect(mapStateToProps, mapDispatchToProps)(InlineTextField))

export default InlineTextFieldContainer
