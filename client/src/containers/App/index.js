import React from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import './style.css'
import {
  Dashboard,
  Navbar,
  DataManager,
  WidgetFormModal
} from '../'

const App = () => (
  <div id="app">
    <DataManager />
    <Route path="*/:id" component={Navbar} />
    <Switch>
      <Route path="/dashboard/:id" component={Dashboard} />
      <Redirect from="/" to="/dashboard/1" component={Dashboard} />
    </Switch>
    <Route
      path="/dashboard/:id/widget/new"
      component={WidgetFormModal}
    />
  </div>
)

export default withRouter(App)
