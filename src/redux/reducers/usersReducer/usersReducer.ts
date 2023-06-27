import {ActionsType, DispatchType, UsersPageType, UserType} from '../../reduxStore/reduxStore';
import {followAPI, usersAPI} from '../../../api/api';


export type FollowUserACType = {
    type: 'FOLLOW-USER'
    userId: string
}
export type UnfollowUserACType = {
    type: 'UNFOLLOW-USER'
    userId: string
}
export type SetUsersACType = {
    type: 'SET-USERS'
    users: Array<UserType>
}
export type SetTotalUsersCountACType = {
    type: 'SET-TOTAL-USERS-COUNT',
    totalCount: number
}
export type SetCurrentPageACType = {
    type: 'SET-CURRENT-PAGE',
    currentPage: number
}
export type ToggleIsFetchingACType = {
    type: 'TOGGLE-IS-FETCHING',
    isFetching: boolean
}
export type ToggleInProgressACType = {
    type: 'TOGGLE-IN-PROGRESS',
    isFetching:  boolean,
    userId: string
}

export const followUser = (userId: string): FollowUserACType => {
    return {type: 'FOLLOW-USER', userId: userId}
}
export const unfollowUser = (userId: string): UnfollowUserACType => {
    return {type: 'UNFOLLOW-USER', userId: userId}
}
export const setUsers = (users: Array<UserType>): SetUsersACType => {
    return {type: 'SET-USERS', users}
}
export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountACType => {
    return {type: 'SET-TOTAL-USERS-COUNT', totalCount}
}
export const setCurrentPage = (currentPage: number): SetCurrentPageACType => {
    return {type: 'SET-CURRENT-PAGE', currentPage}
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingACType => {
    return {type: 'TOGGLE-IS-FETCHING', isFetching}
}
export const toggleInProgress = (isFetching: boolean, userId: string): ToggleInProgressACType => {
    return {type: 'TOGGLE-IN-PROGRESS', isFetching, userId}
}

let initialState: UsersPageType = {
    users: [],
    pageSize: 100,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    inProgress: [],
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {
    switch (action.type) {

        case 'FOLLOW-USER': {
            if (action.userId)
                return {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        }
                        return u
                    })
                }
        }
            return {...state}
        case 'UNFOLLOW-USER': {
            if (action.userId)
                return {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u
                    })
                }
        }
            return {...state}
        case 'SET-USERS': {
            return {...state, users: action.users}
        }
        case 'SET-CURRENT-PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET-TOTAL-USERS-COUNT': {
            return {...state, totalCount: action.totalCount}
        }
        case 'TOGGLE-IS-FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        case 'TOGGLE-IN-PROGRESS': {
            return {
                ...state, inProgress: action.isFetching
                    ? [...state.inProgress, action.userId]
                    : state.inProgress.filter(id => id != action.userId)
            }
        }

        default:
            return state
    }
}



 export const getUsers = (currentPage: number, pageSize: number)=> {
    return (dispatch: DispatchType)=> {
         dispatch(toggleIsFetching(true))

         usersAPI.getUsers(currentPage,pageSize)
             .then(data => {
                 dispatch(toggleIsFetching(false))
                 dispatch(setUsers(data.items));
                 dispatch(setTotalUsersCount(data.totalCount));
             })
     }
 }

 export const follow = (userId: string)=> {
    return (dispatch: DispatchType)=> {
        dispatch(toggleInProgress(true, userId))
        followAPI.postFollow(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(followUser(userId))
                }
                dispatch(toggleInProgress(false, userId))
            })
     }
 }

 export const unfollow = (userId: string)=> {
    return (dispatch: DispatchType)=> {
        dispatch(toggleInProgress(true, userId))
        followAPI.deleteFollow(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(unfollowUser(userId))
                }
                dispatch(toggleInProgress(false, userId))
            })
     }
 }
