import React from 'react';
import {StatePropsType} from '../../reduxStore/reduxStore';



export const getUsersSelector = (state: StatePropsType) => {
return state.usersPage.users
}
export const getPageSizeSelector = (state: StatePropsType) => {
return state.usersPage.pageSize
}
export const getTotalCountSelector = (state: StatePropsType) => {
return state.usersPage.totalCount
}
export const getCurrentPageSelector = (state: StatePropsType) => {
return state.usersPage.currentPage
}
export const getIsFetchingSelector = (state: StatePropsType) => {
return state.usersPage.isFetching
}
export const getInProgressSelector = (state: StatePropsType) => {
return state.usersPage.inProgress
}