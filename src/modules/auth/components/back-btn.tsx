import { ChevronLeftIcon } from 'lucide-react';

import { Link } from 'react-router';

const BackBtn = () => {
  return (
    <Link
      to='/auth/login'
      className='gap-0.5rem text-muted-foreground hover:text-foreground flex items-center justify-center text-sm'
    >
      <ChevronLeftIcon size={16} /> Back to login
    </Link>
  );
};

export default BackBtn;
