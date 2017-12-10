import React, { Component } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import './style.css'
import {
  Dashboard,
  Navbar,
  DataManager,
  WidgetFormModal
} from '../'

class App extends Component {
  constructor() {
    super()
    this.state = {
      prevPath: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      this.setState({ prevPath: this.props.location })
    }
  }

  render() {

    const isModal = this.props.location.pathname === '/widget/new'

    return (
      <div id='app'>
        <Navbar />
        <DataManager />
        <Switch location={
          isModal ? (this.state.prevPath || this.props.location) : this.props.location}>
          <Route exact path="/dashboard/:id" component={Dashboard} />
          <Redirect from="/" to="/dashboard/1" component={Dashboard} />
        </Switch>
        {isModal ? <Route
          path="/widget/new"
          component={WidgetFormModal}
        /> : null
        }
      </div>
    )
  }
}

export default withRouter(App)
