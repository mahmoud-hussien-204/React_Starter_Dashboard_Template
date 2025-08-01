import { useOutletContext } from 'react-router';

import type { ISettingsOutletContext } from '../interfaces/settings.interface';

const useSettings = () => {
  return useOutletContext<ISettingsOutletContext>();
};

export default useSettings;
