import React from 'react'
import MaterialTitlePanel from './material-title-panel'
import PropTypes from 'prop-types'

const styles = {
  sidebar: {
    width: 256,
    height: '100%',
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#AAB5C1',
    textDecoration: 'none',
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#AAB5C1',
  },
  content: {
    padding: '16px',
    height: '100%',
  },
}

const SidebarContent = (props) => {
  const style = props.style ? { ...styles.sidebar, ...props.style } : styles.sidebar

  const links = []

  for (let ind = 0; ind < 5; ind++) {
    links.push(
      <a key={ind} href="#" style={styles.sidebarLink}>Mock Dashboard Link {ind}</a>)
  }

  return (
    <MaterialTitlePanel title="Teledash" style={style}>
      <div className="">
        <div style={styles.divider} />
        {links}
      </div>
    </MaterialTitlePanel>
  )
}

SidebarContent.propTypes = {
  style: PropTypes.object,
}

export default SidebarContent
