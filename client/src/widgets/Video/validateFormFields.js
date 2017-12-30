export default function validateFormFields(datasourceId) {
  const errors = {}
  if (!datasourceId) errors.datasourceId = 'Please enter a datasource'
  return errors
}
