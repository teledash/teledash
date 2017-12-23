import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Suggest } from '@blueprintjs/labs'
import { Classes, MenuItem, FormGroup } from '@blueprintjs/core'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { mapDatasourcesToValuesList } from './selectors'
import './style.css'

class DatasourceSuggest extends Component {
  constructor(props) {
    super(props)
    this.renderItem = this.renderItem.bind(this)
    this.filterItem = this.filterItem.bind(this)
    this.onItemSelect = this.onItemSelect.bind(this)
    this.renderInputValue = this.renderInputValue.bind(this)
  }

  onItemSelect(item) {
    // We must set the field value imperatively because `this.props.onChange`
    // will not get triggered.
    this.props.setFieldValue(this.props.name, item)
  }

  filterItem(query, item, index) {
    // Remove spaces from query and make all letters lower case
    const queryMatcher = query.replace(/\s+/g, '').toLowerCase()
    // Remove spaces, square brackets, and quotes from item
    const itemMatcher = item.replace(/[\[\]"\s]+/g, '').toLowerCase()
    return itemMatcher.includes(queryMatcher)
  }

  renderInputValue(input) {
    return input
  }

  renderItem({ handleClick, isActive, item }) {
    const classes = classnames({
      [Classes.ACTIVE]: isActive,
      [Classes.INTENT_PRIMARY]: isActive,
    })

    return (
      <MenuItem
        className={classes}
        key={item}
        onClick={handleClick}
        text={item}
      />
    )
  }

  render() {
    const {
      touched,
      error,
      label,
      name,
      onBlur,
      value,
      onChange,
      placeholder,
      valueList
    } = this.props

    return (
      <div id="datasource-suggest">
        <FormGroup
          className={touched && error ? Classes.INTENT_DANGER : ''}
          label={label}
          labelFor={name}
          required
        >

          <Suggest
            closeOnSelect
            openOnKeyDown={false}
            inputValueRenderer={this.renderInputValue}
            items={valueList}
            onItemSelect={this.onItemSelect}
            itemPredicate={this.filterItem}
            itemRenderer={this.renderItem}
            noResults={<MenuItem disabled text="No results." />}
            popoverProps={{ popoverClassName: Classes.MINIMAL }}
            inputProps={{
              placeholder,
              onBlur,
              onChange,
              value,
              className: touched && error ? Classes.INTENT_DANGER : '',
              name
            }}
          />
          {touched && error ? <div className={Classes.FORM_HELPER_TEXT}>{error}</div> : ''}
        </FormGroup>
      </div>
    )
  }
}

DatasourceSuggest.propTypes = {
  touched: PropTypes.bool,
  error: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  valueList: PropTypes.array,
  setFieldValue: PropTypes.func
}

const mapStateToProps = ({ datasources }) => ({
  valueList: mapDatasourcesToValuesList(datasources)
})

export default connect(mapStateToProps)(DatasourceSuggest)
