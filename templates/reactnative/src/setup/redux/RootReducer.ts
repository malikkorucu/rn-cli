import { all } from 'redux-saga/effects'
import { combineReducers } from 'redux'

import * as auth from '../../redux/auth/authRedux'

export const rootReducer = combineReducers({
  auth: auth.reducer,
})

export type RootState = ReturnType<typeof rootReducer>

export function* rootSaga() {
  yield all([auth.saga()])
}
