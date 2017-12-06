import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'react-mosaic-component/react-mosaic-component.css'
import '@blueprintjs/core/dist/blueprint.css'
import 'normalize.css/normalize.css'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import configureStore from './store'
import App from './containers/App'

const history = createHistory()
const store = configureStore({}, history)
registerServiceWorker()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root')
)
