import { createStore, compose } from 'redux'
import config from './dashboard.config'

export default function configureStore(initialState = { config }) {

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
      typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

  return createStore(
    function() {},
    initialState,
    composeEnhancers()
  )
}
