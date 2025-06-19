import { configureStore, combineSlices } from '@reduxjs/toolkit';

import { appConfigReducer } from './slices/appConfigSlice';

import { userDataReducer } from './slices/userDataSlice';

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
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

// Define RootState based on the rootReducer
export type RootState = ReturnType<typeof rootReducer>;

// Export dispatch type
export type AppDispatch = typeof store.dispatch;

export type AppState = ReturnType<typeof store.getState>;
