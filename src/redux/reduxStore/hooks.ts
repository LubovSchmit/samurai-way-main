import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {DispatchType, StatePropsType} from './reduxStore';

export const useAppDispatch = () => useDispatch<DispatchType>()
export const useAppSelector: TypedUseSelectorHook<StatePropsType> = useSelector