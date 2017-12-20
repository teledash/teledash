import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import PropTypes from 'prop-types'
import { googleKey } from './api-keys'

const googleEndpoint =
  `https://maps.googleapis.com/maps/api/js?key=${googleKey}&v=3.exp&libraries=geometry,drawing,places`

const MapWithAMarker = withScriptjs(withGoogleMap(({
  mapCenterLat,
  mapCenterLong,
  markerLat,
  markerLong
}) => {
  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: mapCenterLat, lng: mapCenterLong }}
      center={{ lat: mapCenterLat, lng: mapCenterLong }}
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
      mapCenterLat,
      mapCenterLong,
      markerLat,
      markerLong
    } = this.props.data

    // Coerce strings to be numbers to make the widget more flexible
    return (<MapWithAMarker
      mapCenterLat={+mapCenterLat || -34.397}
      mapCenterLong={+mapCenterLong || 150.644}
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
  mapCenterLat: PropTypes.number,
  mapCenterLong: PropTypes.number,
  markerLat: PropTypes.number,
  markerLong: PropTypes.number
  // })
}

Map.defaultProps = {
  data: {}
}
