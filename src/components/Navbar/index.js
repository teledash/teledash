import React from 'react'
import PropTypes from 'prop-types'
// import './index.less'

// const styles = {
//   root: {
//     fontFamily: '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
//     fontWeight: 300,
//   },
//   header: {
//     backgroundColor: '#03a9f4',
//     color: 'white',
//     padding: '16px',
//     fontSize: '1.5em',
//   },
// }

const Navbar = (props) => {
   return (
     <div className='pt-navbar pt-dark'>
       <div>{props.title}</div>
      <div>
        <div className='pt-logo' />
        <div className='pt-navbar-heading'>
        </div>
      </div>
      <div className='pt-navbar-group pt-button-group'>
        <label className='pt-label pt-inline theme-selection'>
        </label>
         <div className='navbar-separator'>
           {/* <span className='actions-label'>Example Actions:</span>
           <button
             className='pt-button pt-icon-grid-view'
             onClick={this.autoArrange}
           >
             Auto Arrange
          </button>
           <button
             className='pt-button pt-icon-arrow-top-right'
             onClick={this.addToTopRight}
           >
             Add Window to Top Right
          </button> */}
         </div>
      </div>
    </div>
  )
}

// Navbar.propTypes = {
//   style: PropTypes.object,
//   title: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.object,
//   ]),
//   children: PropTypes.object,
// }

export default Navbar
