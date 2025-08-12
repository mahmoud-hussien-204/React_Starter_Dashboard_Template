import { atom } from 'jotai';

import {
  getLangConfig,
  getLayoutConfig,
  setLangConfig,
  setLayoutConfig,
  setPrimaryColorConfig,
  setThemeConfig,
} from '@/core/config/index.config';

import { EnumThemes } from '@/shared/enums/index.enum';

// ************ theme atom
export const appConfigThemeAtom = atom<ITheme | null>(null);

export const appConfigSetThemeAtom = atom(null, (_, set, newTheme: ITheme) => {
  set(appConfigThemeAtom, newTheme);
  setThemeConfig(newTheme);
  applyThemeToDocument(newTheme);
});

function applyThemeToDocument(theme: ITheme) {
  const root = document.documentElement;
  root.classList.remove(EnumThemes.LIGHT, EnumThemes.DARK);
  if (theme === EnumThemes.SYSTEM) {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.classList.add(isDark ? EnumThemes.DARK : EnumThemes.LIGHT);
  } else {
    root.classList.add(theme);
  }
}

// ************ primary color atom
export const appConfigPrimaryColorAtom = atom<string | null>(null);

export const appConfigSetPrimaryColorAtom = atom(null, (_, set, color: string) => {
  set(appConfigPrimaryColorAtom, color);
  setPrimaryColorConfig(color);
  applyPrimaryColorToDocument(color);
});

function applyPrimaryColorToDocument(color: string) {
  document.documentElement.style.setProperty('--dynamic-primary-color', color);
}

// ************ lang atom
export const appConfigLangAtom = atom<ILang>(getLangConfig());

export const appConfigSetLangAtom = atom(null, (_, set, lang: ILang) => {
  set(appConfigLangAtom, lang);
  setLangConfig(lang);
});

// ************ layout atom
export const appConfigLayoutAtom = atom<ILayout | null>(getLayoutConfig());

export const appConfigSetLayoutAtom = atom(null, (_, set, layout: ILayout) => {
  set(appConfigLayoutAtom, layout);
  setLayoutConfig(layout);
});

// ************ page data atom
export const appConfigPageDataAtom = atom<IPageData>({ title: '' });

export const appConfigSetPageDataAtom = atom(null, (_, set, data: IPageData) => {
  set(appConfigPageDataAtom, data);
});
