import React from 'react'
import { Modal } from '../../components'
import { connect } from 'react-redux'
import { goBack } from 'react-router-redux'
import Form from './Form'
import { unselectDashboard } from './actions'

const NewWidgetFormModal = ({ goToPreviousPath }) => (
  <Modal
    title="New Widget"
    toggleDialog={goToPreviousPath} >
    <Form />
  </Modal>
)

const mapDispatchToProps = dispatch => ({
  goToPreviousPath: () => {
    dispatch(unselectDashboard())
    dispatch(goBack())
  }
})

export default connect(null, mapDispatchToProps)(NewWidgetFormModal)
