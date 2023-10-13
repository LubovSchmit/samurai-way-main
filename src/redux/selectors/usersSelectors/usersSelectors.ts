import {StatePropsType} from '../../reduxStore/reduxStore';
import {createSelector} from 'reselect';


//dopustim getUsersSelector  - eto slojnyi selector,
// togda mi ispolzuem createSelector s zavisimostyami (iz bibliothequi reselect):
export const getUsersSelector = (state: StatePropsType) => {
return state.usersPage.users
}
//vozvrashaet users
export const getUsersSuperSelector = createSelector(getUsersSelector, (users) => {
    return users
})


// prostye selectori mojno ostavit bez ispolzovania reselect:
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