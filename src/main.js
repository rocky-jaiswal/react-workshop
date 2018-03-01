import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import App from './App'
import { initialState, createReducer } from './redux'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(createReducer(), initialState, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(sagas.counterSaga)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
