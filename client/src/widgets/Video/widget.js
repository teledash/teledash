import React from 'react'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types'
import './style.css'

const Video = ({ url }) => (
  <div className="player-wrapper">
    <ReactPlayer
      className="player"
      width="100%"
      height="100%"
      url={url}
      playing
    />
  </div>
)

Video.propTypes = {
  url: PropTypes.string
}

export default Video

