import {ActionsType, AppAuthType, AppThunk} from '../../reduxStore/reduxStore';
import {authMe} from '../authReducer/authReducer';


//TYPES
export type AppAuthACType = {
    type: 'SET-INITIALISED'
}


//ACTION CREATORS
export const setInitialisedSuccess = (): AppAuthACType => ({type: 'SET-INITIALISED'})


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


//THUNKS

export const initialiseApp = (): AppThunk => (dispatch) => {
    let promise = dispatch(authMe())
    Promise.all([promise])
        .then(() => {
            dispatch(setInitialisedSuccess())
        })

}

