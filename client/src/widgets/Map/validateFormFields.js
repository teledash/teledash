export default function validateFormFields(
  markerLat,
  markerLong
) {
  const errors = {}
  if (!markerLat) errors.markerLat = 'Please enter a source for the marker latitude'
  if (!markerLong) errors.markerLong = 'Please enter a source for the marker longitude'
  return errors
}
