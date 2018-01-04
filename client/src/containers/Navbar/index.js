import React from 'react'
import './style.css'
import DashboardsButton from './DashboardsButton'
import DatasourcesButton from './DatasourcesButton'
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
        <DatasourcesButton />
        <DashboardsButton />
        <span className="pt-navbar-divider" />
        <button className="pt-button pt-minimal pt-icon-cog" />
        <button className="pt-button pt-minimal pt-icon-notifications" />
        <button className="pt-button pt-minimal pt-icon-user" />
      </div>
    </div>
  </nav>
)

export default Navbar
