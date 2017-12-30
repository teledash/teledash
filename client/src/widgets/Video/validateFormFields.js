export default function validateFormFields(datasource) {
  const errors = {}
  if (!datasource) errors.datasource = 'Please enter a datasource'
  return errors
}
