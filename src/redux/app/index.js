import { ADD_COUNTER, DEC_COUNTER, SET_DATE, ADD_COUNTER_ASYNC } from './actions'

export const initialState = {
  counter: 0,
  currentDate: new Date()
}

const selectUiReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTER: {
      return { counter: state.counter + 1 }
    }
    case DEC_COUNTER: {
      return { counter: state.counter - 1 }
    }
    case SET_DATE: {
      return { currentDate: action.payload }
    }
    default:
      return state
  }
}

export default selectUiReducer
