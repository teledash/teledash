import React from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './style.css'
import { compose, lifecycle } from 'recompose'
import {
  Dashboard,
  Navbar,
  DataManager,
  WidgetFormModal
} from '../'

import { getDatasources } from './actions'

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

const withLifeCycle = lifecycle({
  componentDidMount() {
    this.props.getDatasources()
  }
})

const mapDispatchToProps = dispatch => ({
  getDatasources: () => dispatch(getDatasources())
})

const withConnect = connect(null, mapDispatchToProps)

export default compose(
  withRouter,
  withConnect,
  withLifeCycle
)(App)
