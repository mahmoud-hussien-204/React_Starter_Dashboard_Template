import { useLocation } from 'react-router';

const useIsPathActive = () => {
  const { pathname } = useLocation();

  const isPathActive = (path: string) => {
    return pathname.startsWith(path);
  };

  return { isPathActive };
};

export default useIsPathActive;
