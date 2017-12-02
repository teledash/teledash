import React from 'react'
import PropTypes from 'prop-types'

const SettingsButton = ({ title, onClick }) => (
    <button
      title={title}
      onClick={onClick}
    className="mosaic-default-control pt-button pt-minimal pt-icon-more"
    >
    </button>
  )

SettingsButton.PropTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
}

export default SettingsButton
