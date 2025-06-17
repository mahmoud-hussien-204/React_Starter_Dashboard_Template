import type { Slice } from '@reduxjs/toolkit';

import { rootReducer, store } from '.';

export const injectSliceModule = (slice: Slice) => {
  const withSlice = rootReducer.inject(slice);
  store.replaceReducer(withSlice);
  return withSlice;
};
