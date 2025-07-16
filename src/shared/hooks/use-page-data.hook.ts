import { appConfigActions } from '@/core/store/slices/app-config-slice.store.slice';

import { useAppDispatch } from './use-store.hook';

import { useEffect } from 'react';

const usePageData = (data: IPageData) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(appConfigActions.setPageData(data));
  }, []);
};

export default usePageData;
