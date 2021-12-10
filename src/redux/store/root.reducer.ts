import {combineReducers} from 'redux';
import {authSlice} from '../slices/auth.slice';
import { loaderSlice } from '../slices/loader.slice';

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
  loader: loaderSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
