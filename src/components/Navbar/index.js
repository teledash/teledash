import React from 'react'
import PropTypes from 'prop-types'

const Navbar = (props) => (
  <nav class="pt-navbar pt-dark modifier">
    <div class="pt-navbar-group pt-align-left">
      <div class="pt-navbar-heading">Teledash</div>
      <input class="pt-input" placeholder="Search..." type="text" />
    </div>
    <div class="pt-navbar-group pt-align-right">
      <button class="pt-button pt-minimal pt-icon-user"></button>
      <button class="pt-button pt-minimal pt-icon-notifications"></button>
      <button class="pt-button pt-minimal pt-icon-cog"></button>
    </div>
  </nav>
  )

export default Navbar
