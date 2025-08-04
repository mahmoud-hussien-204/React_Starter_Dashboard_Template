import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <section>
      auth
      <Outlet />
    </section>
  );
};

export default AuthLayout;
