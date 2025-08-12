import { userDataTokenAtom } from '@/core/store/atoms/user-data.atoms';

import { useAtomValue } from 'jotai';

import { Navigate, useLocation } from 'react-router';

const AuthGuard = ({ children }: React.PropsWithChildren) => {
  const location = useLocation();

  const userToken = useAtomValue(userDataTokenAtom);

  const inAuthPage = location.pathname.startsWith(`/auth`);

  // If no token and not on an auth page, redirect to login
  if (!userToken && !inAuthPage)
    return <Navigate to='/auth/login' state={{ from: location }} replace />;

  // If authenticated and on an auth page, redirect to base URL
  if (userToken && inAuthPage) return <Navigate to='/' replace />;

  return children;
};

export default AuthGuard;
