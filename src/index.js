import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import configureStore from './store'
import { App } from './containers'
import registerServiceWorker from './registerServiceWorker'
import 'react-mosaic-component/react-mosaic-component.css'
import '@blueprintjs/core/dist/blueprint.css'
import 'normalize.css/normalize.css'

ReactDOM.render(<App />, document.getElementById('app'))
registerServiceWorker()

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app'));
registerServiceWorker();
