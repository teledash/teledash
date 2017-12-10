import React from 'react'
import { Modal } from '../../components'
import { connect } from 'react-redux'
import { goBack } from 'react-router-redux'

const NewWidgetFormModal = ({ goToPreviousPath }) => (
  <Modal toggleDialog={goToPreviousPath} >This is a test</Modal>
)

const mapDispatchToProps = dispatch => ({
  goToPreviousPath: () => dispatch(goBack())
})

export default connect(null, mapDispatchToProps)(NewWidgetFormModal)
