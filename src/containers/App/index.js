import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import { Dashboard } from '../'
import { Navbar } from '../../components'

export class App extends Component {
  render() {
    return (
      <div id='app'>
        <Navbar addWindow={() => {}} />
        <Dashboard />
      </div>
    )
  }
}

App.PropTypes = {
  windowCount: PropTypes.number,
  currentNode: PropTypes.object,
  theme: PropTypes.string,
  widgets: PropTypes.array
}

export default App
