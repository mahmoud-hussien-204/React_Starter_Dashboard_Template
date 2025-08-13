import { useSearchParams } from 'react-router';

import { getFilterValueUtil } from '../utils/url.utils';

const useURLFilters = () => {
  const [searchParams, setSearchParamsMethod] = useSearchParams();

  const statusSearchParams = getFilterValueUtil(searchParams.get('status'));

  const roleSearchParams = getFilterValueUtil(searchParams.get('role'));

  const pageSearchParams = getFilterValueUtil(searchParams.get('page')) || '1';

  const sizeSearchParams = getFilterValueUtil(searchParams.get('size')) || '15';

  const orderBySearchParams = getFilterValueUtil(searchParams.get('orderBy'));

  const searchSearchParams = getFilterValueUtil(searchParams.get('search'));

  const setSearchParams = (params: Record<string, string | boolean | number>) => {
    const newSearchParams = new URLSearchParams(searchParams);

    for (const key in params) {
      if (params[key]) {
        newSearchParams.set(key, params[key].toString());
      }
    }
    setSearchParamsMethod(newSearchParams);
  };

  return {
    statusSearchParams,
    roleSearchParams,
    pageSearchParams,
    sizeSearchParams,
    orderBySearchParams,
    searchSearchParams,
    searchParams,
    setSearchParams,
  };
};

export default useURLFilters;
