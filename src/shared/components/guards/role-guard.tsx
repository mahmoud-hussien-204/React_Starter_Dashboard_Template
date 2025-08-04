import { useAppSelector } from '@/shared/hooks/use-store.hook';

import { Navigate, useLocation } from 'react-router';

const RoleGuard = ({ children }: React.PropsWithChildren) => {
  const location = useLocation();

  const userRole = useAppSelector((state) => state.userData.role);

  const inAuthPage = location.pathname.startsWith(`/auth`);

  if (!userRole && !inAuthPage) {
    return <Navigate to='/auth/login' state={{ from: location }} replace />;
  }

  if (userRole && !location.pathname.startsWith(`/${userRole}`)) {
    return <Navigate to={`/${userRole}`} replace />;
  }

  return children;
};

export default RoleGuard;
