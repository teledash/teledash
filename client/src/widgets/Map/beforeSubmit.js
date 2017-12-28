import { mapValueToSubmitWithId } from '../util'

export default function beforeSubmit(values, datasources) {
  const markerLat = mapValueToSubmitWithId(values.markerLat, datasources)
  const markerLong = mapValueToSubmitWithId(values.markerLong, datasources)

  // If no x or yValue return values as the same as they were passed in
  if (markerLat && markerLong) {
    return { ...values, markerLat, markerLong }
  }
}
