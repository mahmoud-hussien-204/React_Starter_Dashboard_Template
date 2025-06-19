import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  email: string | null;
}

const initialState: AuthState = {
  email: null,
};

export const authSlice = createSlice({
  name: 'auth-slice',
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
