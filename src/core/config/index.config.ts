import { STORAGE_KEYS_CONSTANT } from '@/shared/constants/storage-keys.constant';

import { THEME_CONSTANT } from '@/shared/constants/themes.constant';

import { EnumDashboardLayouts, EnumThemes } from '@/shared/enums/index.enum';

export const defaultAppConfig = {
  theme: EnumThemes.LIGHT as ITheme,
  lang: 'en' as ILang,
  layout: EnumDashboardLayouts.DEFAULT as ILayout,
  primaryColor: THEME_CONSTANT.primaryColors[0],
};

export function getThemeConfig() {
  const theme = localStorage.getItem(STORAGE_KEYS_CONSTANT.theme);
  return (theme || defaultAppConfig.theme) as ITheme;
}

export function setThemeConfig(theme: ITheme) {
  localStorage.setItem(STORAGE_KEYS_CONSTANT.theme, theme);
}

export function getLangConfig() {
  const lang = localStorage.getItem(STORAGE_KEYS_CONSTANT.lang);
  return (lang || defaultAppConfig.lang) as ILang;
}

export function setLangConfig(lang: ILang) {
  localStorage.setItem(STORAGE_KEYS_CONSTANT.lang, lang);
}

export function getLayoutConfig() {
  const layout = localStorage.getItem(STORAGE_KEYS_CONSTANT.layout);
  return (layout || defaultAppConfig.layout) as ILayout;
}

export function setLayoutConfig(layout: ILayout) {
  localStorage.setItem(STORAGE_KEYS_CONSTANT.layout, layout);
}

export function getPrimaryColorConfig() {
  const primaryColor = localStorage.getItem(STORAGE_KEYS_CONSTANT.primaryColor);
  return (primaryColor || defaultAppConfig.primaryColor) as string;
}

export function setPrimaryColorConfig(primaryColor: string) {
  localStorage.setItem(STORAGE_KEYS_CONSTANT.primaryColor, primaryColor);
}
