import { combineReducers } from 'redux'
import appReducer, { initialState as appInitialState } from './app'

export const initialState = {
  app: appInitialState
}

export function createReducer () {
  const reducer = combineReducers({
    app: appReducer
  })

  const rootReducer = (state, action) => {
    return reducer(state, action)
  }

  return rootReducer
}
