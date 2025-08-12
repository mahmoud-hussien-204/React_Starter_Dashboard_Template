import { useEffect } from 'react';

import { useSetAtom } from 'jotai';

import { appConfigSetPageDataAtom } from '@/core/store/atoms/app-config.atoms';

const usePageData = (data: IPageData) => {
  const setPageData = useSetAtom(appConfigSetPageDataAtom);

  useEffect(() => {
    setPageData(data);
  }, []);
};

export default usePageData;
