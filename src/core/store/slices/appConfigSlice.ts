import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { getLangConfig, getLayoutConfig, getThemeConfig } from '@/core/config';

interface IAppConfigState {
  theme: ITheme;
  lang: ILang;
  layout: ILayout;
  pageData: IPageData;
}

const initialState: IAppConfigState = {
  theme: getThemeConfig(),
  lang: getLangConfig(),
  layout: getLayoutConfig(),
  pageData: {
    title: '',
  },
};

const appConfigSlice = createSlice({
  name: 'app-config-slice',
  initialState,
  reducers: {
    setPageData: (state, action: PayloadAction<IPageData>) => {
      state.pageData = action.payload;
    },
  },
});

export const appConfigActions = appConfigSlice.actions;

export const appConfigReducer = appConfigSlice.reducer;
