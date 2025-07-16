import { STORAGE_KEYS } from '@/shared/constants/storage-keys.constant';

export const defaultAppConfig = {
  theme: 'light' as ITheme,
  lang: 'en' as ILang,
  layout: 'default' as ILayout,
};

const cashedAppConfig: {
  theme?: ITheme;
  lang?: ILang;
  layout?: ILayout;
} = {};

export function getThemeConfig() {
  if (!cashedAppConfig.theme) {
    const theme = localStorage.getItem(STORAGE_KEYS.THEME);
    cashedAppConfig.theme = (theme || defaultAppConfig.theme) as ITheme;
  }

  return cashedAppConfig.theme;
}

export function getLangConfig() {
  if (!cashedAppConfig.lang) {
    const lang = localStorage.getItem(STORAGE_KEYS.LANG);
    cashedAppConfig.lang = (lang || defaultAppConfig.lang) as ILang;
  }

  return cashedAppConfig.lang;
}

export function getLayoutConfig() {
  if (!cashedAppConfig.layout) {
    const layout = localStorage.getItem(STORAGE_KEYS.LAYOUT);
    cashedAppConfig.layout = (layout || defaultAppConfig.layout) as ILayout;
  }

  return cashedAppConfig.layout;
}
