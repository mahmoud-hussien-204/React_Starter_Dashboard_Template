import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  email: string;
}

const initialState: AuthState = {
  email: 'm.hussein',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const authSliceActions = authSlice.actions;

export const authSliceReducer = authSlice.reducer;

// extend the LazyLoadedSlices interface
declare module '@/core/store' {
  export interface LazyLoadedSlices {
    auth: AuthState;
  }
}
