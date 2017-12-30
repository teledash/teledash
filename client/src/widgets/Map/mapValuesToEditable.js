import { replaceIdWithName } from '../util'

export default function mapValuesToEditable(values, datasources) {
  const { markerLong, markerLat } = values

  const longId = markerLong.split(/[[\]]/).filter(Boolean)[0]
  const latId = markerLat.split(/[[\]]/).filter(Boolean)[0]

  const longName = datasources[longId] ? datasources[longId].name : null
  const latName = datasources[latId] ? datasources[latId].name : null

  return {
    ...values,
    markerLong: longName ? replaceIdWithName(markerLong, longName) : markerLong,
    markerLat: latName ? replaceIdWithName(markerLat, latName) : markerLat
  }
}
