import {ActionsType, AuthType, DispatchType, UserDataType} from '../../reduxStore/reduxStore';
import {authAPI, profileAPI} from '../../../api/api';
import {setUserProfile} from '../profileReducer/profileReducer';


export type AuthUserACType = {
    type: 'SET-USER-DATA'
    data: UserDataType
}


let initialState: AuthType = {
    data: {
        id: null,
        email: null,
        login: null,
        isAuth: false,
    },
    isFetching: false,
}

export const setAuthUserData = (data: UserDataType): AuthUserACType => {
    return {type: 'SET-USER-DATA', data}
}

export const authReducer = (state: AuthType = initialState, action: ActionsType): AuthType => {
    switch (action.type) {

        case 'SET-USER-DATA':

            return {
                ...state,
                data: {
                    ...action.data,
                    isAuth: true
                }
            }



        default:
            return state
    }
}

export const authMe = ()=> {
    return (dispatch: DispatchType)=> {
        authAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(data.data))
            }
        })
    }
}


