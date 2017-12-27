import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import PropTypes from 'prop-types'
import { googleKey } from './api-keys'

const googleEndpoint =
  `https://maps.googleapis.com/maps/api/js?key=${googleKey}&v=3.exp&libraries=geometry,drawing,places`

const MapWithAMarker = withScriptjs(withGoogleMap(({
  markerLat,
  markerLong
}) => {
  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: markerLat, lng: markerLong }}
      center={{ lat: markerLat, lng: markerLong }}
    >
      <Marker
        position={{ lat: markerLat, lng: markerLong }}
      />
    </GoogleMap>
  )
}))

export default class Map extends React.Component {
  render() {
    const {
      markerLat,
      markerLong
    } = this.props.data

    // Coerce strings to be numbers to make the widget more flexible
    return (<MapWithAMarker
      markerLat={+markerLat || -34.397}
      markerLong={+markerLong || 150.644}
      googleMapURL={googleEndpoint}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />)
  }
}

MapWithAMarker.propTypes = {
  // data: PropTypes.shape({
  markerLat: PropTypes.number,
  markerLong: PropTypes.number
  // })
}

Map.defaultProps = {
  data: {}
}
