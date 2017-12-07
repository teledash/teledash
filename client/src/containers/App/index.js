import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import './style.css'
import {
  Dashboard,
  Navbar,
  DataManager
} from '../'

const App = () => (
  <div id='app'>
    <Navbar />
    <DataManager/>
    <Switch>
      <Route exact path="/dashboard/:id" component={Dashboard} />
      <Redirect to="/dashboard/1" component={Dashboard} />
    </Switch>
  </div>
)

App.PropTypes = {
  windowCount: PropTypes.number,
  currentNode: PropTypes.object,
  theme: PropTypes.string,
  widgets: PropTypes.array
}

export default App
