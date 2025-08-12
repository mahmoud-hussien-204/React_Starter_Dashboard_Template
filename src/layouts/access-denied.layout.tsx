import { ButtonLink } from '@/shared/components/ui/button-link';

import { HomeIcon } from 'lucide-react';

const AccessDeniedLayout = () => {
  return (
    <section className='py-1.25rem flex h-dvh flex-col items-center justify-center'>
      <img src='/access-denied.svg' className='max-w-[600px]' alt='Not Found' />
      <h1 className='mt-1.25rem mb-0.5rem text-2xl font-bold'>We are sorry !</h1>
      <p className='text-muted-foreground mb-1rem'>
        the page you are trying to access has been restricted access. Please contact the
        administrator.
      </p>
      <ButtonLink to='/'>
        <HomeIcon />
        Go to Home
      </ButtonLink>
    </section>
  );
};

export default AccessDeniedLayout;
