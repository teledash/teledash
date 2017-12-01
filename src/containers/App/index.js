import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import {
  Dashboard,
  Navbar,
  DataManager
} from '../'

const App = () => (
  <div id='app'>
    <Navbar />
    <Dashboard />
    <DataManager />
  </div>
)


App.PropTypes = {
  windowCount: PropTypes.number,
  currentNode: PropTypes.object,
  theme: PropTypes.string,
  widgets: PropTypes.array
}

export default App
