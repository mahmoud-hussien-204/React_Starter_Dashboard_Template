import { useAppSelector } from '@/shared/hooks/use-store.hook';

import { Navigate, useLocation } from 'react-router';

const AuthGuard = ({ children }: React.PropsWithChildren) => {
  const location = useLocation();

  const userToken = useAppSelector((state) => state.userData.token);

  const inAuthPage = location.pathname.startsWith(`/auth`);

  // If no token and not on an auth page, redirect to login
  if (!userToken && !inAuthPage)
    return <Navigate to='/auth/login' state={{ from: location }} replace />;

  // If authenticated and on an auth page, redirect to base URL
  if (userToken && inAuthPage) return <Navigate to='/' replace />;

  return children;
};

export default AuthGuard;
