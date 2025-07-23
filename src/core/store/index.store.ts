import { configureStore, combineSlices } from '@reduxjs/toolkit';

import {
  appConfigActions,
  appConfigReducer,
  themeListenerMiddleware,
} from './slices/app-config-slice.store.slice';

import { userDataReducer } from './slices/user-data-slice.store.slice';

import { getThemeConfig } from '../config/index.config';

// Define an interface for lazy-loaded slices (to be extended via module augmentation)
export interface LazyLoadedSlices {}

// Create the root reducer with initial slices and support for lazy-loaded slices
export const rootReducer = combineSlices({
  appConfig: appConfigReducer,
  userData: userDataReducer,
}).withLazyLoadedSlices<LazyLoadedSlices>();

// Configure the store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(themeListenerMiddleware.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

// Define RootState based on the rootReducer
export type RootState = ReturnType<typeof rootReducer>;

// Export dispatch type
export type AppDispatch = typeof store.dispatch;

export type AppState = ReturnType<typeof store.getState>;

// ******** Dispatch initial actions
store.dispatch(appConfigActions.setTheme(getThemeConfig()));
