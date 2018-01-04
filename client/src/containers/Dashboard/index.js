import React from 'react'
import {
  Mosaic,
  MosaicWindow,
} from 'react-mosaic-component'
import isEqual from 'lodash/isEqual'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, lifecycle, withProps as props } from 'recompose'
import SettingsButton from './SettingsButton'
import { dashboardChange, getDashboards, getWidgets } from './actions'
import widgetFactory from './widgetFactory'
import './style.css'

const Dashboard = ({ widgets, tree, onChange }) => {
  const widgetsJSX = widgets
    // We sort the widgets to the order that the `dashboard tree` expects
    .sort((w1, w2) => w1.position - w2.position)
    // We convert each `widget object` to a `widget component` with the correct props passed in
    .map(widgetFactory)

  return (
    <Mosaic
      renderTile={(count, path) => (
        <MosaicWindow
          path={path}
          toolbarControls={
            <SettingsButton widgetId={
              // Arrays are zero-based, but windowCount is one-based
              widgets[count - 1] && widgets[count - 1].id
            }
            />
          }
        >
          <div className='window'>
            {widgetsJSX[count - 1]}
          </div>
        </MosaicWindow>
      )}
      zeroStateView={<div></div>}
      value={tree}
      onChange={onChange}
      className="mosaic-blueprint-theme pt-dark"
    />
  )
}

export const mapStateToProps =
  ({ dashboards, widgets }, { match }) => ({
    tree: dashboards[match.params.dashboardId] ?
      dashboards[match.params.dashboardId].tree : null,
    widgets: widgets.filter(widget => widget.dashboardId === +match.params.dashboardId),
  })

export const mapDispatchToProps = (dispatch, { match }) => ({
  onChange: tree => dispatch(dashboardChange(tree, match.params.dashboardId)),
  getDashboards: () => dispatch(getDashboards()),
  getWidgets: () => dispatch(getWidgets())
})

const withLifeCycle = lifecycle({
  componentDidMount() {
    this.props.getWidgets()
    this.props.getDashboards()
  },

  shouldComponentUpdate(nextProps, nextState) {
    // Prevent ugly re-renders of widgets when datasources change
    if (!isEqual(this.props.datasources, nextProps.datasources) ||
      // If create new widget form is active
      (nextProps.location.pathname.includes('/widget/') &&
      // and starting app on edit or new widget form page
      !this.props.location.pathname.includes('/widget/')) ||
      // If navigating away from new widget or edit form
      (!nextProps.location.pathname.includes('/widget/') &&
      // and currently on new widget form
      this.props.location.pathname.includes('/widget/'))
    )
      return false
    return true
  }
})

const withPropTypes = props({
  onChange: PropTypes.func,
  tree: PropTypes.object,
  widgets: PropTypes.array,
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(
  withPropTypes,
  withConnect,
  withLifeCycle
)(Dashboard)
