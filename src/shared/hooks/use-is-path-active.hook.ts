import { useLocation } from 'react-router';

const useIsPathActive = () => {
  const { pathname } = useLocation();

  const isPathActive = (subPath: string, isIndex = false) => {
    // Remove leading/trailing slashes and split the pathname
    const segments = pathname.replace(/^\/|\/$/g, '').split('/');

    // if the path is /${role} only -> the index page should be active ('/super-admin' === '/super-admin/dashboard') if the dashboard page is the index
    if (isIndex && segments.length === 1) return true;

    // Check if the path has at least 2 segments (role + path)
    if (segments.length < 2) return false;

    // Remove the role segment
    const pathAfterRole = segments.slice(1).join('/');

    // Compare the normalized target path
    return pathAfterRole.startsWith(subPath);
  };

  return { isPathActive, pathname };
};

export default useIsPathActive;
