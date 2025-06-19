import { createSlice } from '@reduxjs/toolkit';

import { getLangConfig, getLayoutConfig, getThemeConfig } from '@/core/config';

interface IAppConfigState {
  theme: ITheme;
  lang: ILang;
  layout: ILayout;
}

const initialState: IAppConfigState = {
  theme: getThemeConfig(),
  lang: getLangConfig(),
  layout: getLayoutConfig(),
};

const appConfigSlice = createSlice({
  name: 'app-config-slice',
  initialState,
  reducers: {},
});

export const appConfigActions = appConfigSlice.actions;

export const appConfigReducer = appConfigSlice.reducer;
