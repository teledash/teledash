import filter from 'lodash/filter'

export function selectDatasourceNamesOfType(datasources, type) {
  const datasourcesOfType =
    filter(datasources, datasource => datasource.type === type)
  return datasourcesOfType.map(({ id, name }) => ({ value: id, name }))
}
