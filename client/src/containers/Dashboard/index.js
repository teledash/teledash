import React from 'react'
import {
  Mosaic,
  MosaicWindow,
  updateTree
} from 'react-mosaic-component'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SettingsButton from './SettingsButton'
import { onDashboardChange } from './actions'
import widgetFactory from './widgetFactory'
import './style.css'

const Dashboard = ({ widgets, tree, onChange, dataSources }) => {

  const widgetsJSX = widgets.map(widget =>
    widgetFactory(widget.type, widget.name, dataSources[widget.source].data)
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

Dashboard.PropTypes = {
  onChange: PropTypes.func,
  tree: PropTypes.object,
  widgets: PropTypes.array,
  dataSources: PropTypes.object
}

export const mapStateToProps =
  ({ dashboards, widgets, dataSources }, { match }) => ({
    tree: dashboards[match.params.id].tree,
    widgets: widgets.filter(widget => widget.dashboard_id === +match.params.id),
    dataSources
  })

export const mapDispatchToProps = (dispatch, { match }) => ({
  onChange: tree =>
    dispatch(onDashboardChange(tree, match.params.id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
