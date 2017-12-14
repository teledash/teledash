import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'
import { all, call } from 'redux-saga/effects'
import freeze from 'redux-freeze'
import { composeWithDevTools } from 'redux-devtools-extension'
import dataManagerSaga from './containers/DataManager/saga'
import navbarSaga from './containers/Navbar/saga'
import dashboardSaga from './containers/Dashboard/saga'
import widgetFormSaga from './containers/WidgetFormModal/saga'
import appSaga from './containers/App/saga'
import reducers from './reducers'
const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState, history) {
  const middlewares = [
    freeze,
    sagaMiddleware,
    routerMiddleware(history),
  ]

  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middlewares))
  )

  store.runSaga = sagaMiddleware.run(
    function* mainSaga() {
      yield all([
        call(appSaga),
        call(dataManagerSaga),
        call(navbarSaga),
        call(dashboardSaga),
        call(widgetFormSaga)
      ])
    })
  return store
}
