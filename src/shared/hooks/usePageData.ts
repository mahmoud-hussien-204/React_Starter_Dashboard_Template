import { appConfigActions } from '@/core/store/slices/appConfigSlice';

import { useAppDispatch } from './useStore';

import { useEffect } from 'react';

const usePageData = (data: IPageData) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(appConfigActions.setPageData(data));
  }, []);
};

export default usePageData;
