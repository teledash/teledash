import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Suggest } from '@blueprintjs/labs'
import { Classes, MenuItem, FormGroup } from '@blueprintjs/core'
import classnames from 'classnames'
import { TOP_100_FILMS } from './data'
import './style.css'

class DatasourceSuggest extends Component {
  constructor(props) {
    super(props)

    this.state = {
      item: TOP_100_FILMS[0]
    }

    this.renderItem = this.renderItem.bind(this)
    this.filterItem = this.filterItem.bind(this)
    this.handleValueChange = this.handleValueChange.bind(this)
    this.renderInputValue = this.renderInputValue.bind(this)
  }

  filterItem(query, item, index) {
    return `${index + 1}. ${item.title.toLowerCase()} ${item.year}`.indexOf(query.toLowerCase()) >= 0
  }

  handleValueChange(item) { return this.setState({ item }) }

  handleSwitchChange(prop) {
    return (event) => {
      this.setState({ [prop]: event.currentTarget.checked })
    }
  }

  renderInputValue(input) {
    return input.title
  }

  renderItem({ handleClick, isActive, item }) {
    const classes = classnames({
      [Classes.ACTIVE]: isActive,
      [Classes.INTENT_PRIMARY]: isActive,
    })

    return (
      <MenuItem
        className={classes}
        label={item.year.toString()}
        key={item.rank}
        onClick={handleClick}
        text={`${item.rank}. ${item.title}`}
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
      onChange,
      value,
      placeholder
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
            items={TOP_100_FILMS}
            handleBlur={onBlur}
            itemPredicate={this.filterItem}
            itemRenderer={this.renderItem}
            noResults={<MenuItem disabled text="No results." />}
            onItemSelect={this.handleValueChange}
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
  placeholder: PropTypes.string
}

export default DatasourceSuggest
