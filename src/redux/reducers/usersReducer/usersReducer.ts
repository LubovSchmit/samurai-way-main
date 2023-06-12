import {ActionsType, UsersPageType, UserType} from '../../reduxStore/reduxStore';


export type FollowUserACType = {
    type: 'FOLLOW-USER'
    id: string
}
export type UnfollowUserACType = {
    type: 'UNFOLLOW-USER'
    id: string
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

let initialState: UsersPageType = {
    users: [],
    pageSize: 100,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
}

export const followUser = (id: string): FollowUserACType => {
    return {type: 'FOLLOW-USER', id}
}
export const unfollowUser = (id: string): UnfollowUserACType => {
    return {type: 'UNFOLLOW-USER', id}
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


export const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {
    switch (action.type) {

        case 'FOLLOW-USER': {
            if (action.id)
                return {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.id) {
                            return {...u, followed: true}
                        }
                        return u
                    })
                }
        }
            return {...state}

        case 'UNFOLLOW-USER': {
            if (action.id)
                return {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.id) {
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

        default:
            return state
    }
}