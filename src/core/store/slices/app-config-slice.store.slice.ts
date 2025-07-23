import { createListenerMiddleware, createSlice, type PayloadAction } from '@reduxjs/toolkit';

import {
  getLangConfig,
  setLangConfig,
  setLayoutConfig,
  setThemeConfig,
} from '@/core/config/index.config';

import { EnumThemes } from '@/shared/enums/index.enum';

interface IAppConfigState {
  theme: ITheme | null;
  lang: ILang;
  layout: ILayout | null;
  pageData: IPageData;
}

const initialState: IAppConfigState = {
  theme: null,
  lang: getLangConfig(),
  layout: null,
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
    setTheme: (state, action: PayloadAction<ITheme>) => {
      state.theme = action.payload;
      setThemeConfig(action.payload);
    },
    setLang: (state, action: PayloadAction<ILang>) => {
      state.lang = action.payload;
      setLangConfig(action.payload);
    },
    setLayout: (state, action: PayloadAction<ILayout>) => {
      state.layout = action.payload;
      setLayoutConfig(action.payload);
    },
  },
});

export const appConfigActions = appConfigSlice.actions;

export const appConfigReducer = appConfigSlice.reducer;

export const themeListenerMiddleware = createListenerMiddleware();

themeListenerMiddleware.startListening({
  actionCreator: appConfigActions.setTheme,
  effect: async (action: PayloadAction<ITheme>) => {
    const theme = action.payload;
    const root = document.documentElement;
    root.classList.remove(EnumThemes.LIGHT, EnumThemes.DARK);
    if (theme === EnumThemes.SYSTEM) {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.add(isDark ? EnumThemes.DARK : EnumThemes.LIGHT);
    } else {
      root.classList.add(theme);
    }
  },
});
