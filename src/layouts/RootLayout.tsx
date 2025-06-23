import { Link, Outlet } from 'react-router';

const RootLayout = () => {
  console.log('root render');

  return (
    <main>
      root layout
      <div className='flex gap-4 p-4'>
        <Link to='/auth/login'>login</Link>
        <Link to='/settings'>settings</Link>
        <Link to='/teachers/users'>users</Link>
        <Link to='/teachers/exams'>exams</Link>
      </div>
      <Outlet />
    </main>
  );
};

export default RootLayout;
