export default function validateMapFormFields(xLabel) {
  const errors = {}
  if (!xLabel) errors.mapCenterLat = 'Please enter a valid map center latitude'
  return errors
}
