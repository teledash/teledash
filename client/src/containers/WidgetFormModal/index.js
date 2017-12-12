import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Modal } from '../../components'
import Form from './Form'

const WidgetFormModal = ({ goToPreviousPath }) => (
  <Modal
    title="New Widget"
    toggleDialog={goToPreviousPath}
  >
    <Form />
  </Modal>
)

const mapDispatchToProps = (dispatch, { match }) => ({
  goToPreviousPath: () => {
    dispatch(push(`/dashboard/${match.params.id}`))
  }
})


WidgetFormModal.propTypes = {
  goToPreviousPath: PropTypes.func.isRequired
}

export default withRouter(connect(null, mapDispatchToProps)(WidgetFormModal))
