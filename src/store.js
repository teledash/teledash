import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import dataManagerSaga from './containers/DataManager/sagas'
import reducers from './reducers'

export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware()
  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
      typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

  return {
    ...createStore(
      reducers,
      initialState,
      composeEnhancers(
        applyMiddleware(sagaMiddleware)
      )
    ),
    runSaga: sagaMiddleware.run(dataManagerSaga)
  }
}


