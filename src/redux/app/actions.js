export const ADD_COUNTER = 'ADD_COUNTER'
export const ADD_COUNTER_ASYNC = 'ADD_COUNTER_ASYNC'
export const DEC_COUNTER = 'DEC_COUNTER'
export const SET_DATE    = 'SET_DATE'

export function addCounter () {
  return {
    type: ADD_COUNTER
  }
}

export function decrementCounter () {
  return {
    type: DEC_COUNTER
  }
}

export function setDate (payload) {
  return {
    type: SET_DATE,
    payload
  }
}

export function addCounterAsync (dispatch) {
  setTimeout(() => {
    // Yay! Can invoke sync or async actions with `dispatch`
    dispatch(addCounter())
  }, 2000)
}
