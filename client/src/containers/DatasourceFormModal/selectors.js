export function mapValuesToProps(datasources, datasourceId) {
  // datasource is in edit mode
  if (datasourceId && datasources.length) {
    // coerce datasource to string and keep strictly equal sign!
    const datasource = datasources.find(ds => +datasourceId === ds.id)
    const { name, type, url } = datasource
    return { name, type, url }
  }

  // This is a new datasource
  return { name: '', type: '', url: '' }
}
