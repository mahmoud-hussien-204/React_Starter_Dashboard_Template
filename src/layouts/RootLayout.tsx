import { Outlet } from 'react-router';

const RootLayout = () => {
  return (
    <main className='font-poppins'>
      <Outlet />
    </main>
  );
};

export default RootLayout;
