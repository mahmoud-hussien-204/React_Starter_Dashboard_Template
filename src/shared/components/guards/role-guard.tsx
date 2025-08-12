import useUserRole from '@/shared/hooks/use-user-role.hook';

import { Navigate, useLocation } from 'react-router';

const RoleGuard = ({ children }: React.PropsWithChildren) => {
  const location = useLocation();

  const userRole = useUserRole();

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
