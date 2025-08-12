import { getDefaultStore } from 'jotai';

import { appConfigSetPrimaryColorAtom, appConfigSetThemeAtom } from './atoms/app-config.atoms';

import { getPrimaryColorConfig, getThemeConfig } from '../config/index.config';

export const store = getDefaultStore();

store.set(appConfigSetThemeAtom, getThemeConfig());

store.set(appConfigSetPrimaryColorAtom, getPrimaryColorConfig());
