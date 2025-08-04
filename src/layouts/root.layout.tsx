import AuthGuard from '@/shared/components/guards/auth-guard';

import RoleGuard from '@/shared/components/guards/role-guard';

import { Outlet } from 'react-router';

const RootLayout = () => {
  return (
    <main className='font-poppins'>
      <AuthGuard>
        <RoleGuard>
          <Outlet />
        </RoleGuard>
      </AuthGuard>
    </main>
  );
};

export default RootLayout;
