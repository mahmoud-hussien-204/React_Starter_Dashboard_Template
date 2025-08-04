import { ButtonLink } from '@/shared/components/ui/button-link';

import { HomeIcon } from 'lucide-react';

const NotFoundLayout = () => {
  return (
    <section className='py-1.25rem flex h-dvh flex-col items-center justify-center'>
      <img src='/not-found.svg' className='max-w-[600px]' alt='Not Found' />
      <h1 className='mt-1.25rem mb-0.5rem text-2xl font-bold'>Oops! This Page is Not Found</h1>
      <p className='text-muted-foreground mb-1rem'>The requested page could not be found.</p>
      <ButtonLink to='/'>
        <HomeIcon />
        Go to Home
      </ButtonLink>
    </section>
  );
};

export default NotFoundLayout;
