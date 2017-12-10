import React from 'react'
import {
  Mosaic,
  MosaicWindow,
} from 'react-mosaic-component'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SettingsButton from './SettingsButton'
import { dashboardChange, getDashboards } from './actions'
import widgetFactory from './widgetFactory'
import { compose, lifecycle, withProps as props } from 'recompose'
import './style.css'

const Dashboard = ({ widgets, tree, onChange, datasources }) => {

  const widgetsJSX = widgets.map(widget =>
    widgetFactory(widget.type, widget.name, datasources[widget.source].data)
  )

  return (
    <Mosaic
      renderTile={(count, path) => (
        <MosaicWindow
          path={path}
          toolbarControls={<SettingsButton />}
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
  ({ dashboards, widgets, datasources }, { match }) => ({
    tree: dashboards[match.params.id] ? dashboards[match.params.id].tree: null,
    widgets: widgets.filter(widget => widget.dashboardId === +match.params.id),
    datasources
  })

export const mapDispatchToProps = (dispatch, { match }) => ({
  onChange: tree => dispatch(dashboardChange(tree, match.params.id)),
  getDashboards: () => dispatch(getDashboards())
})

const withLifeCycle = lifecycle({
  componentDidMount() {
    this.props.getDashboards()
  }
})

const withPropTypes = props({
  onChange: PropTypes.func,
  tree: PropTypes.object,
  widgets: PropTypes.array,
  datasources: PropTypes.object
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(
  withPropTypes,
  withConnect,
  withLifeCycle
)(Dashboard)
