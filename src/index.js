import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import configureStore from './store'
import App  from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import 'react-mosaic-component/react-mosaic-component.css'
import '@blueprintjs/core/dist/blueprint.css'
import 'normalize.css/normalize.css'

const store = configureStore()
registerServiceWorker()
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'))
registerServiceWorker()
