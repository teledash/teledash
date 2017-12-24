export default function validateFormFields(
  xValue,
  yValue,
  xLabel,
  yLabel
) {
  const errors = {}
  if (!xValue) errors.xValue = 'Please enter a source for the x-axis'
  if (!yValue) errors.yValue = 'Please enter a source for the y-axis'
  if (!xLabel) errors.xLabel = 'Please enter a label for the x-axis'
  if (!yLabel) errors.yLabel = 'Please enter a label for the y-axis'
  return errors
}
