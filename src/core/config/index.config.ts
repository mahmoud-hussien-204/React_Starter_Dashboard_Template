import { STORAGE_KEYS } from '@/shared/constants/storage-keys.constant';

import { primaryColors } from '@/shared/constants/themes.constant';

import { EnumDashboardLayouts, EnumThemes } from '@/shared/enums/index.enum';

export const defaultAppConfig = {
  theme: EnumThemes.LIGHT as ITheme,
  lang: 'en' as ILang,
  layout: EnumDashboardLayouts.DEFAULT as ILayout,
  primaryColor: primaryColors[0],
};

export function getThemeConfig() {
  const theme = localStorage.getItem(STORAGE_KEYS.theme);
  return (theme || defaultAppConfig.theme) as ITheme;
}

export function setThemeConfig(theme: ITheme) {
  localStorage.setItem(STORAGE_KEYS.theme, theme);
}

export function getLangConfig() {
  const lang = localStorage.getItem(STORAGE_KEYS.lang);
  return (lang || defaultAppConfig.lang) as ILang;
}

export function setLangConfig(lang: ILang) {
  localStorage.setItem(STORAGE_KEYS.lang, lang);
}

export function getLayoutConfig() {
  const layout = localStorage.getItem(STORAGE_KEYS.layout);
  return (layout || defaultAppConfig.layout) as ILayout;
}

export function setLayoutConfig(layout: ILayout) {
  localStorage.setItem(STORAGE_KEYS.layout, layout);
}

export function getPrimaryColorConfig() {
  const primaryColor = localStorage.getItem(STORAGE_KEYS.primaryColor);
  return (primaryColor || defaultAppConfig.primaryColor) as string;
}

export function setPrimaryColorConfig(primaryColor: string) {
  localStorage.setItem(STORAGE_KEYS.primaryColor, primaryColor);
}
