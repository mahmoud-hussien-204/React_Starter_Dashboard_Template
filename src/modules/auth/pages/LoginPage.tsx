import { authSlice } from '../store';

import { useAppSelector, useInjectSlice } from '@/shared/hooks/use-store';

const LoginPage = () => {
  useInjectSlice(authSlice);
  const email = useAppSelector((state) => state.auth?.email);
  return <div>LoginPage {email} </div>;
};

export default LoginPage;
