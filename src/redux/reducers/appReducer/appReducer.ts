import {ActionsType, AppAuthType, AppThunk} from '../../reduxStore/reduxStore';
import {authMe} from '../authReducer/authReducer';


//TYPES
export type AppAuthACType = {
    type: 'SET-INITIALISED'
}


//INITIAL STATE
let initialState: AppAuthType = {
    initialised: false,
}


//REDUCER
export const appReducer = (state: AppAuthType = initialState, action: ActionsType): AppAuthType => {
    switch (action.type) {
        case 'SET-INITIALISED':
            return {
                ...state,
                initialised: true
            }
        default:
            return state
    }
}


//ACTION CREATORS
export const setInitialisedSuccess = (): AppAuthACType => ({type: 'SET-INITIALISED'})


//THUNKS

export const initialiseApp = (): AppThunk => (dispatch) => {
    let promise = dispatch(authMe())
    Promise.all([promise])
        .then(() => {
            dispatch(setInitialisedSuccess())
        })

}

/*
export const login = (email: string, password: string, rememberMe: boolean): ThunkAction<void, StatePropsType, unknown, AnyAction> => (dispatch) => {

    authAPI.login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(authMe())
            } else {
                let message = data.data.messages.length > 0 ? data.messages[0] : 'Some error';
                stopSubmit('login', {_error: message})
                dispatch(stopSubmit('login', {_error: message}));
            }
        })
}
export const authMe = (): AppThunk => (dispatch) => {
    authAPI.authMe()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}
export const logout = (): AppThunk => (dispatch) => {
    authAPI.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}
*/
