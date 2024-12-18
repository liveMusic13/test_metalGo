import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { reducer as localData } from './local-data/localData.slice';

const reducers = combineReducers({ localData });

export const store = configureStore({
	reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
