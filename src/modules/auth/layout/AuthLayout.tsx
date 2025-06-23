import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div>
      AuthLayout
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
