import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextInput } from '../../components'

class MapFormFields extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mapCenterLatTouched: false
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(evt) {
    this.props.handleChange(evt)
    this.setState({ mapCenterLatTouched: true })
  }

  render() {
    const {
      errors,
      handleBlur,
      values
    } = this.props

    return (
      <TextInput
        touched={this.state.mapCenterLatTouched}
        errors={errors.mapCenterLat}
        onChange={this.onChange}
        onBlur={handleBlur}
        value={values.mapCenterLat || '' /* Silence controlled/controlled component error */}
        label="Map Center Latitude"
        labelFor="mapCenterLat"
        name="mapCenterLat"
        placeholder="Enter the mapping for map center latitude..."
      />
    )
  }
}

export default MapFormFields

MapFormFields.propTypes = {
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  values: PropTypes.object,
  errors: PropTypes.object
}
