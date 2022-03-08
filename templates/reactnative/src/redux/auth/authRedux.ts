import { Action } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import Async from '@react-native-async-storage/async-storage'
import { call, put, takeLatest } from 'redux-saga/effects'

export interface ActionWithPayload<T> extends Action {
    payload?: T
}

export const actionTypes = {
    Login: '[Login] Action',
    Test: '[Test] Action',
}

const initialAuthState: IAuthState = {
    user: undefined,
    token: "",
    test: 'malik korucu'
}

export interface IAuthState {
    user: any
    token?: string
    test: string
}

export const reducer = persistReducer(
    { storage: Async, key: 'user', whitelist: ['user', 'accessToken', 'userProfile'] },
    (state: any = initialAuthState, action: ActionWithPayload<any>) => {
        switch (action.type) {
            case actionTypes.Login: {
                const accessToken = action.payload?.token
                return { accessToken }
            }
            case actionTypes.Test: {
                return { ...initialAuthState, test: action.payload }
            }
            default:
                return state
        }
    }
)

export const actions = {
    login: (accessToken: string) => ({ type: actionTypes.Login, payload: { accessToken } }),
    setTest: (text: string) => ({ type: actionTypes.Test, payload: text })
}

export function* saga() {
    yield takeLatest(actionTypes.Login, function* loginSaga(data: any) {
        // const user_id = data.payload.id
        // const { response } = yield _getProfileInformation(user_id)
        // yield put(actions.setProfileInformation(response))
    })

    // yield takeLatest(actionTypes.Register, function* registerSaga() {
    //   yield put(actions.requestUser())
    // })

    // yield takeLatest(actionTypes.UserRequested, function* userRequested() {
    //   const { data: user } = yield getUserByToken()
    //   yield put(actions.fulfillUser(user))
    // })
}
