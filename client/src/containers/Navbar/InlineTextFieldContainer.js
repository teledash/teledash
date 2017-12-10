import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './style.css'
import { InlineTextField } from '../../components'
import { updateDashboardName } from './actions'
import { getDashboardName } from './selectors'

const mapStateToProps = (state, ownProps) =>
  ({ value: getDashboardName(state, ownProps) })

const mapDispatchToProps = (dispatch, ownProps) => ({
  submit: name =>
    dispatch(updateDashboardName(name, ownProps.location.pathname.slice(-1)))
})

const InlineTextFieldContainer =
  withRouter(connect(mapStateToProps, mapDispatchToProps)(InlineTextField))

export default InlineTextFieldContainer
