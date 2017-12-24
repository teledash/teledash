export default function validateFormFields(xLabel) {
  const errors = {}
  if (!xLabel) errors.mapCenterLat = 'Please enter a valid map center latitude'
  return errors
}
