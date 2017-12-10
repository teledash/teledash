import React from 'react'
import { connect } from 'react-redux'
import { goBack } from 'react-router-redux'
import PropTypes from 'prop-types'
import { Modal } from '../../components'
import Form from './Form'
import { clearWidgetForm } from './actions'

const NewWidgetFormModal = ({ goToPreviousPath }) => (
  <Modal
    title="New Widget"
    toggleDialog={goToPreviousPath}
  >
    <Form />
  </Modal>
)

const mapDispatchToProps = dispatch => ({
  goToPreviousPath: () => {
    dispatch(clearWidgetForm())
    dispatch(goBack())
  }
})

NewWidgetFormModal.propTypes = {
  goToPreviousPath: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(NewWidgetFormModal)
