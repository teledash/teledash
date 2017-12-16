import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import { googleKey } from '../api-keys'
import { connect } from 'react-redux'
import map from 'lodash/map'

const googleEndpoint =
  `https://maps.googleapis.com/maps/api/js?key=${googleKey}&v=3.exp&libraries=geometry,drawing,places`

const MapWithAMarker = withScriptjs(withGoogleMap(({ coordinates }) => {
  // Coerce latitude and longitude so that is can accept strings as coordinates
  const [latitude, longitude] = map(coordinates, val => +val)
  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: latitude, lng: longitude }}
      center={{ lat: latitude, lng: longitude }}
    >
      <Marker
        position={{ lat: latitude, lng: longitude }}
      />
    </GoogleMap>
  )
}))

export default class Map extends React.Component {
  render() {
    return (<MapWithAMarker
      coordinates={this.props.data || {
        latitude: -34.397,
        longitude: 150.644
      }}
      googleMapURL={googleEndpoint}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />)
  }
}
