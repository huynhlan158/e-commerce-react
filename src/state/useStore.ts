import { useDispatch as useReduxDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppReducer, RootState } from './store';

/**
 * The custom hook to get the state and dispatch function of the app store.
 */
export const useStore = (reducerName: AppReducer) => {
  const dispatch = useReduxDispatch<AppDispatch>();
  const state = useSelector((state: RootState) => state[reducerName]);
  return { dispatch, ...state };
};
