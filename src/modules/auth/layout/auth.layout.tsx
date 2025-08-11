import AnimationPage from '@/shared/components/animations/animation-page';

import { Outlet } from 'react-router';

import Shape from '../components/shape';

const AuthLayout = () => {
  return (
    <AnimationPage>
      <div className='gap-2rem grid min-h-dvh grid-cols-2'>
        <div className='bg-sidebar gap-3rem p-2rem flex flex-col items-center justify-center text-center'>
          <Shape />
          <div>
            <h1 className='mb-0.75rem text-2xl font-semibold'>Turn your ideas into reality</h1>
            <h2 className='text-lg'>
              Creative quality and experience access <br /> all platforms and devices
            </h2>
          </div>
        </div>
        <div className='p-2rem flex flex-col justify-center'>
          <div className='mx-auto w-full max-w-[30rem]'>
            <Outlet />
          </div>
        </div>
      </div>
    </AnimationPage>
  );
};

export default AuthLayout;
