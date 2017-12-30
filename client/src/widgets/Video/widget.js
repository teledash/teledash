import React from 'react'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types'

const Video = ({ url }) => (
  <ReactPlayer url={url} playing />
)

Video.propTypes = {
  url: PropTypes.string
}

export default Video

