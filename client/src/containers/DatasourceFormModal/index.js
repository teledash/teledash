import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Modal } from '../../components'
import FormContainer from './FormContainer'

const DatasourceFormModal = ({ goToPreviousPath, match }) => (
  <Modal
    title={match.params.datasourceId ? 'Datasource Settings' : 'New Datasource'}
    toggleDialog={goToPreviousPath}
  >
    <FormContainer />
  </Modal>
)

const mapDispatchToProps = (dispatch, { match }) => ({
  goToPreviousPath: () => {
    dispatch(push(`/dashboard/${match.params.dashboardId}`))
  }
})


DatasourceFormModal.propTypes = {
  goToPreviousPath: PropTypes.func.isRequired
}

export default withRouter(connect(null, mapDispatchToProps)(DatasourceFormModal))
