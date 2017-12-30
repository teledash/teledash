import { replaceIdWithName } from '../util'

export default function mapValuesToEditable(values, datasources) {
  if (Object.keys(datasources).length > 0) {
    const { markerLong, markerLat } = values
    const longId = markerLong.split(/[[\]]/).filter(Boolean)[0]
    const latId = markerLat.split(/[[\]]/).filter(Boolean)[0]

    const longName = datasources[longId].name
    const latName = datasources[latId].name

    return {
      ...values,
      markerLong: replaceIdWithName(markerLong, longName),
      markerLat: replaceIdWithName(markerLat, latName),
    }
  }

  return values
}
