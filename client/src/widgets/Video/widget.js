import React from 'react'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types'

const Video = ({ url }) => (
  <ReactPlayer url="https://www.youtube.com/watch?v=ddFvjfvPnqk" playing />
)

Video.propTypes = {
  url: PropTypes.string
}

export default Video

