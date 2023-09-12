import {ActionsType, AppThunk, AuthType, UserDataType} from '../../reduxStore/reduxStore';
import {authAPI} from '../../../api/api';


//TYPES

export type AuthUserACType = {
    type: 'SET-USER-DATA'
    payload: UserDataType

}


//INITIAL STATE

let initialState: AuthType = {
    data: {
        id: null,
        email: null,
        login: null,
        isAuth: false,
    },
    isFetching: false,
}


//REDUCER

export const authReducer = (state: AuthType = initialState, action: ActionsType): AuthType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                data: {
                    ...action.payload,

                }
            }
        default:
            return state
    }
}


//ACTION CREATORS

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): AuthUserACType => {
    return ({type: 'SET-USER-DATA', payload: {id, email, login, isAuth}})
}


//THUNKS


//export const authMe = (): ThunkAction <void, StatePropsType, unknown, ActionsType> => (dispatch) => {...}
//ThunkAction import


export const login = (email: string, password: string, rememberMe: boolean):AppThunk => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(authMe())
            }
        })
}

export const authMe = ():AppThunk => (dispatch) => {
    authAPI.authMe()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}

export const logout = ():AppThunk => (dispatch) => {
    authAPI.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}