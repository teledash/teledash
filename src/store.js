import { createStore, compose } from 'redux'
import reducers from './reducers'

export default function configureStore(initialState = { }) {

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
      typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

  return createStore(
    reducers,
    initialState,
    composeEnhancers()
  )
}
