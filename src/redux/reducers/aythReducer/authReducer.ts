import {ActionsType, AuthType, UserDataType} from '../../reduxStore/reduxStore';


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