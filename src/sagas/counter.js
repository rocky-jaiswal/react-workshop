import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'
import { ADD_COUNTER_ASYNC, addCounter } from '../redux/app/actions';

// Our worker Saga: will perform the async increment task
function* incrementAsync() {
  yield delay(1000)
  yield put(addCounter())
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery(ADD_COUNTER_ASYNC, incrementAsync)
}
