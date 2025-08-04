import { STORAGE_KEYS } from '@/shared/constants/storage-keys.constant';

import { createSlice } from '@reduxjs/toolkit';

type IUserDataState = {
  token: string | null | undefined;
  role: IUserRole | null | undefined;
};

const initialState: IUserDataState = {
  token: localStorage.getItem(STORAGE_KEYS.token),
  role: (localStorage.getItem(STORAGE_KEYS.role) as IUserRole) || null,
};

const userDataSlice = createSlice({
  name: 'user-data-slice',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem(STORAGE_KEYS.token, action.payload);
    },
    setRole: (state, action) => {
      state.role = action.payload;
      localStorage.setItem(STORAGE_KEYS.role, action.payload);
    },
    clearUserData: (state) => {
      state.token = null;
      state.role = null;
      localStorage.clear();
    },
  },
});

export const userDataActions = userDataSlice.actions;

export const userDataReducer = userDataSlice.reducer;
