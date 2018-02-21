import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'

import App from './App'
import { initialState, createReducer } from './redux';

const store = createStore(createReducer(), initialState)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
