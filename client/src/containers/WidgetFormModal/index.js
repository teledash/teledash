import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Modal } from '../../components'
import Form from './Form'
import { clearWidgetForm } from './actions'

const WidgetFormModal = ({ goToPreviousPath }) => (
  <Modal
    title="New Widget"
    toggleDialog={goToPreviousPath}
  >
    <Form />
  </Modal>
)

const mapDispatchToProps = (dispatch, { location }) => {
  const id = location.pathname.split('/')[2]
  return {
    goToPreviousPath: () => {
      dispatch(clearWidgetForm())
      dispatch(push(`/dashboard/${id}`))
    }
  }
}

WidgetFormModal.propTypes = {
  goToPreviousPath: PropTypes.func.isRequired
}

export default withRouter(connect(null, mapDispatchToProps)(WidgetFormModal))
