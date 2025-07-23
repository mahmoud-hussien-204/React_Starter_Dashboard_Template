import { useLocation } from 'react-router';

const useIsPathActive = () => {
  const { pathname } = useLocation();

  const isPathActive = (subPath: string) => {
    // Remove leading/trailing slashes and split the pathname
    const segments = pathname.replace(/^\/|\/$/g, '').split('/');

    // Check if the path has at least 2 segments (role + path)
    if (segments.length < 2) return false;

    // Remove the role segment
    const pathAfterRole = segments.slice(1).join('/');

    // Compare the normalized target path
    return pathAfterRole.startsWith(subPath);
  };

  return { isPathActive };
};

export default useIsPathActive;
