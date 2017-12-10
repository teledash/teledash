import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'
import { all, call } from 'redux-saga/effects'
import freeze from 'redux-freeze'
import dataManagerSaga from './containers/DataManager/saga'
import navbarSaga from './containers/Navbar/saga'
import dashboardSaga from './containers/Dashboard/saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'
const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState = {}, history) {

  const middlewares = [
    freeze,
    sagaMiddleware,
    routerMiddleware(history),
  ]

  const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(...middlewares)
  ))

  store.runSaga = sagaMiddleware.run(
    function* mainSaga() {
      yield all([
        call(dataManagerSaga),
        call(navbarSaga),
        call(dashboardSaga)
      ])
    }
  )

  return store
}


