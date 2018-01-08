import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import PropTypes from 'prop-types'
import { googleKey } from '../../api-keys'
import './style.css'

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

MapWithAMarker.propTypes = {
  markerLat: PropTypes.number,
  markerLong: PropTypes.number
}

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
      loadingElement={<div style={{ width: '100%', height: `100%` }} />}
      containerElement={<div style={{
        position: "relative",
        paddingTop: "100%"/* Player ratio: 100 / (1280 / 720) */
      }}
      />}
      mapElement={<div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
      }}
      />
      }
      googleMapURL={googleEndpoint}
    />)
  }
}

Map.propTypes = {
  data: PropTypes.object
}

Map.defaultProps = {
  data: {}
}
