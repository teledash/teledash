import React from 'react'
import ReactSidebar from 'react-sidebar'
import Navbar from '../Navbar'
import SidebarContent from './sidebar-content'
import './index.css'

// FIXME: pt-dark on navbar overrides to blue
const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: '#AAB5C1',
    padding: 8,
  }
}

class Sidebar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      docked: false,
      open: false,
      transitions: true,
      touch: true,
      shadow: true,
      pullRight: false,
      touchHandleWidth: 20,
      dragToggleDistance: 30,
    }

    this.renderPropCheckbox = this.renderPropCheckbox.bind(this)
    this.renderPropNumber = this.renderPropNumber.bind(this)
    this.onSetOpen = this.onSetOpen.bind(this)
    this.menuButtonClick = this.menuButtonClick.bind(this)
  }

  onSetOpen(open) {
    this.setState({ open: open })
  }

  menuButtonClick(ev) {
    ev.preventDefault()
    this.onSetOpen(!this.state.open)
  }

  renderPropCheckbox(prop) {
    const toggleMethod = (ev) => {
      const newState = {}
      newState[prop] = ev.target.checked
      this.setState(newState)
    }

    return (
      <p key={prop}>
        <input type="checkbox" onChange={toggleMethod} checked={this.state[prop]} id={prop} />
        <label htmlFor={prop}> {prop}</label>
      </p>)
  }

  renderPropNumber(prop) {
    const setMethod = (ev) => {
      const newState = {}
      newState[prop] = parseInt(ev.target.value, 10)
      this.setState(newState)
    }

    return (
      <p key={prop}>
        {prop} <input type="number" onChange={setMethod} value={this.state[prop]} />
      </p>)
  }

  render() {
    const sidebar = <SidebarContent />

    const contentHeader = (
      <span>
        {!this.state.docked &&
          <a onClick={this.menuButtonClick} href="#" style={styles.contentHeaderMenuLink}>=</a>}
        <span className="sidebar-text">teledash </span>
      </span>)

    const sidebarProps = {
      sidebar: sidebar,
      overlayClassName: 'sidebar',
      docked: this.state.docked,
      sidebarClassName: 'sidebar',
      open: this.state.open,
      touch: this.state.touch,
      shadow: this.state.shadow,
      pullRight: this.state.pullRight,
      touchHandleWidth: this.state.touchHandleWidth,
      dragToggleDistance: this.state.dragToggleDistance,
      transitions: this.state.transitions,
      onSetOpen: this.onSetOpen,
    }

    return (
      <ReactSidebar style={{backgroundColor: 'white'}} {...sidebarProps}>
        <Navbar title={contentHeader} />
        {this.props.children}
      </ReactSidebar>
    )
  }
}

export default Sidebar
