import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface IAppConfigState {
  theme: 'light' | 'dark';
  lang: 'ar' | 'en';
}

const initialState: IAppConfigState = {
  theme: 'light',
  lang: 'en',
};

const appConfigSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },
  },
});

export const { setThemeMode } = appConfigSlice.actions;

export const appConfigReducer = appConfigSlice.reducer;
