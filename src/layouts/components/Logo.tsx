import { CarFront } from 'lucide-react';

import { Link } from 'react-router';

const Logo = () => {
  return (
    <Link to='/' className='flex items-center text-3xl font-semibold tracking-widest'>
      Car
      <span className='me-0.25rem size-1.75rem bg-primary flex items-center justify-center rounded-full'>
        <CarFront strokeWidth={1.5} className='text-primary-foreground' />
      </span>
      Lio
    </Link>
  );
};

export default Logo;
