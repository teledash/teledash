import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'react-mosaic-component/react-mosaic-component.css'
import '@blueprintjs/core/dist/blueprint.css'
import 'normalize.css/normalize.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('app'))
registerServiceWorker()
