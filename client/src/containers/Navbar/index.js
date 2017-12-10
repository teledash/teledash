import React from 'react'
import './style.css'
import DashboardsButton from './DashboardsButton'
import AddWidgetButton from './AddWidgetButton'
import InlineTextFieldContainer from './InlineTextFieldContainer'

const Navbar = () => (
  <nav className="pt-navbar pt-dark modifier">
    <div className="pt-navbar-group pt-align-left">
      <div className="pt-navbar-heading">
        <InlineTextFieldContainer />
      </div>
    </div>
    <div className="pt-navbar-group pt-align-right">
      <div className="pt-navbar-group pt-align-right">
        <AddWidgetButton />
        <button className="pt-button pt-minimal pt-icon-database">Datasources</button>
        <DashboardsButton />
        <span className="pt-navbar-divider" />
        <button className="pt-button pt-minimal pt-icon-user" />
        <button className="pt-button pt-minimal pt-icon-notifications" />
        <button className="pt-button pt-minimal pt-icon-cog" />
      </div>
    </div>
  </nav>
)

export default Navbar
