import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {rootReducer} from './root.reducer';
import createSagaMiddleware from 'redux-saga';
import MMKVStorage from "react-native-mmkv-storage";
import logger from 'redux-logger';
import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer,persistCombineReducers } from 'redux-persist';

const sagaMiddleWare = createSagaMiddleware();
const middleware = [sagaMiddleWare, ...getDefaultMiddleware()];
const storage = new MMKVStorage.Loader().initialize();

const config = {
    key: 'root',
    storage: storage,
    // blacklist: [],
    debug: true,
    devTools: process.env.NODE_ENV !== 'production'
};

if (__DEV__) {
    middleware.push(logger);
}

const reducers = persistReducer<any, any>(config, rootReducer);
const enhancers = [applyMiddleware(...middleware)];
const initialState = undefined;
const persistConfig = { enhancers };
const store = createStore(reducers, initialState, compose(...enhancers));

export const persistor = persistStore(store)
export default store
