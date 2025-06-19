import { STORAGE_KEYS } from '@/shared/constants/storageKeys';

import { createSlice } from '@reduxjs/toolkit';

type IUserDataState = Partial<IUserData>;

const initialState: IUserDataState = JSON.parse(
  localStorage.getItem(STORAGE_KEYS.userData) || '{}'
);

const userDataSlice = createSlice({
  name: 'user-data-slice',
  initialState,
  reducers: {},
});

export const userDataActions = userDataSlice.actions;

export const userDataReducer = userDataSlice.reducer;
