import type { AppDispatch, RootState } from '@/core/store/index.store';

import type { Slice } from '@reduxjs/toolkit';

import { injectSliceModule } from '@/core/store/inject-slic-module.store';

import { useLayoutEffect } from 'react';

import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useInjectSlice = (slice: Slice) => {
  useLayoutEffect(() => {
    injectSliceModule(slice);
  }, []);
};
