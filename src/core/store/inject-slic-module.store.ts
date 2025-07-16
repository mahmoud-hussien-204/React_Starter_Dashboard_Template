import type { Slice } from '@reduxjs/toolkit';

import { rootReducer, store } from './index.store';

export const injectSliceModule = (slice: Slice) => {
  const withSlice = rootReducer.inject(slice);
  store.replaceReducer(withSlice);
  return withSlice;
};
