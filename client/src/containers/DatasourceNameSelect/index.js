import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Select } from '../../components'
import config from '../../dashboard.config'
import { selectDatasourceNamesOfType } from './selectors'

const DatasourceNameSelect = ({
  datasourceOptions,
  touched,
  error,
  value,
  onChange,
  onBlur,
  label,
  name,
  placeholder
}) => {

  return (
    <Select
      touched={touched}
      error={error}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      options={datasourceOptions}
      label={label}
      name={name}
      placeholder={placeholder}
    />
  )
}

DatasourceNameSelect.propTypes = {
  type: PropTypes.oneOf(config.widgetTypes.map(({ value }) => value)).isRequired,
  datasourceOptions: PropTypes.arrayOf(PropTypes.object).isRequired
}

const mapStateToProps = ({ datasources }, { type }) => ({
  datasourceOptions: selectDatasourceNamesOfType(datasources, type)
})

export default connect(mapStateToProps)(DatasourceNameSelect)
