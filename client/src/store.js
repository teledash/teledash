import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'
import dataManagerSaga from './containers/DataManager/sagas'
import reducers from './reducers'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState = {}, history) {

  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
  ]

  const enhancers = [
    applyMiddleware(...middlewares),
  ]

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
      typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

  const store = createStore(
    reducers,
    composeEnhancers(...enhancers)
  )

  store.runSaga = sagaMiddleware.run(dataManagerSaga)

  return store
}


