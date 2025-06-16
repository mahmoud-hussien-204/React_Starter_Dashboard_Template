import type { Reducer, UnknownAction } from '@reduxjs/toolkit';

import { store } from '.';

export function injectReducerModule(key: string, reducer: Reducer<any, UnknownAction>): void {
  if (!store.reducerManager.getReducerMap()[key]) {
    store.reducerManager.add(key, reducer);
    store.replaceReducer(store.reducerManager.reduce);
  }
}

export function removeReducer(key: string): void {
  if (store.reducerManager.getReducerMap()[key]) {
    store.reducerManager.remove(key);
    store.replaceReducer(store.reducerManager.reduce);
  }
}
