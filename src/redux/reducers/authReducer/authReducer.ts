import {ActionsType, AppThunk, AuthType, StatePropsType, UserDataType} from '../../reduxStore/reduxStore';
import {authAPI} from '../../../api/api';
import {stopSubmit} from 'redux-form';
import {ThunkAction} from 'redux-thunk';
import {AnyAction} from 'redux';

//const dispatch: DispatchType  = useDispatch( )

//TYPES
export type AuthUserACType = {
    type: 'SET-USER-DATA'
    payload: UserDataType
}


//ACTION CREATORS
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): AuthUserACType => {
    return ({type: 'SET-USER-DATA', payload: {id, email, login, isAuth}})
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


//THUNKS
export const login = (email: string, password: string, rememberMe: boolean): ThunkAction<void, StatePropsType, unknown, AnyAction> => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe)
    if (data.resultCode === 0) {
        dispatch(authMe())
    } else {
        let message = data.data.messages.length > 0 ? data.messages[0] : 'Some error';
        stopSubmit('login', {_error: message})
        dispatch(stopSubmit('login', {_error: message}));
    }
}
export const authMe = (): AppThunk => async (dispatch) => {
    let data = await authAPI.authMe()
    if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const logout = (): AppThunk => async (dispatch) => {
    let data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}