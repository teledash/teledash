import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './style.css'
import { InlineTextField } from '../../components'
import { updateDashboardName } from './actions'
import { getDashboardName } from './selectors'

const mapStateToProps = (state, ownProps) =>
  ({ value: getDashboardName(state, ownProps) })

const mapDispatchToProps = (dispatch, { location }) => {
  const splitPath = location.pathname.split('/')
  const id = splitPath[splitPath.length - 1]
  return {
    submit: name =>
      dispatch(updateDashboardName(name, id))
  }
}

const InlineTextFieldContainer =
  withRouter(connect(mapStateToProps, mapDispatchToProps)(InlineTextField))

export default InlineTextFieldContainer
