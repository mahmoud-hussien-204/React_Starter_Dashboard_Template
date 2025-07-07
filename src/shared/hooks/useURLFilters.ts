import { useSearchParams } from 'react-router';

import { getFilterValue } from '../utils/url';

const useURLFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const statusSearchParams = getFilterValue(searchParams.get('status'));

  const roleSearchParams = getFilterValue(searchParams.get('role'));

  const pageSearchParams = getFilterValue(searchParams.get('page'));

  const limitSearchParams = getFilterValue(searchParams.get('limit'));

  const orderBySearchParams = getFilterValue(searchParams.get('orderBy'));

  const searchSearchParams = getFilterValue(searchParams.get('search'));

  return {
    statusSearchParams,
    roleSearchParams,
    pageSearchParams,
    limitSearchParams,
    orderBySearchParams,
    searchSearchParams,
    searchParams,
    setSearchParams,
  };
};

export default useURLFilters;
