import { useSearchParams } from 'react-router';

const useURLFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const statusSearchParams = searchParams.get('status');

  const roleSearchParams = searchParams.get('role');

  const pageSearchParams = searchParams.get('page');

  const limitSearchParams = searchParams.get('limit');

  const orderBySearchParams = searchParams.get('orderBy');

  const searchSearchParams = searchParams.get('search');

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
