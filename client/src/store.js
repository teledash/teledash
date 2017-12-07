import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'
import dataManagerSaga from './containers/DataManager/saga'
import navbarSaga from './containers/Navbar/saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'
import { all, call } from 'redux-saga/effects'


const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState = {}, history) {

  const middlewares = [
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
        call(navbarSaga)
      ])
    }
  )

  return store
}


