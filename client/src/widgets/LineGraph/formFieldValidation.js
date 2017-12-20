export default function formFieldValidation(xLabel) {
  const errors = {}
  if (!xLabel) errors.xLabel = 'Please enter a label for the x-axis'
  return errors
}
