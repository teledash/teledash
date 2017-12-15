import * as React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import { googleKey } from '../api-keys'

const googleEndpoint =
  `https://maps.googleapis.com/maps/api/js?key=${googleKey}&v=3.exp&libraries=geometry,drawing,places`

const MapWithAMarker = withScriptjs(withGoogleMap(({ data }) => {
  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: data.iss_position.latitude, lng: data.iss_position.longitude }}
      center={{ lat: data.iss_position.latitude, lng: data.iss_position.longitude }}
    >
      <Marker
        position={{ lat: data.iss_position.latitude, lng: data.iss_position.longitude }}
      />
    </GoogleMap>
  )
}));

export default class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      coord: {
        lat: -34.397,
        lng: 150.644
      }
    }
  }

  componentDidMount() {
    // setInterval(() => {
    //   const lat = this.state.coord.lat + 0.01
    //   const lng = this.state.coord.lng + 0.01
    //   this.setState({
    //     coord: { lat, lng }
    //   })
    // }, 1000)
  }

  render() {
    return (<MapWithAMarker
      coord={this.state.coord}
      googleMapURL={googleEndpoint}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />)
  }
}
