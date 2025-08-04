import { useAppSelector } from '@/shared/hooks/use-store.hook';

import { Navigate, useLocation } from 'react-router';

const RoleGuard = ({ children }: React.PropsWithChildren) => {
  const location = useLocation();

  const userRole = useAppSelector((state) => state.userData.role);

  if (!userRole) return <Navigate to='/auth/login' state={{ from: location }} replace />;

  if (!location.pathname.startsWith(`/${userRole}`)) {
    return <Navigate to={`/${userRole}`} replace />;
  }

  return children;
};

export default RoleGuard;
