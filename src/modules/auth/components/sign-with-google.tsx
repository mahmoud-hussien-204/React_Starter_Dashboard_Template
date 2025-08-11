import { Separator } from '@/shared/components/ui/separator';

import IconGoogle from './icons/icon-google';

import { Button } from '@/shared/components/ui/button';

const SignWithGoogle = () => {
  return (
    <div className='mt-2rem'>
      <div className='mb-2rem relative'>
        <Separator />
        <span className='bg-background text-muted-foreground absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 px-2'>
          Or
        </span>
      </div>

      <Button type='button' className='w-full' variant='outline'>
        <IconGoogle />
        Continue with Google
      </Button>
    </div>
  );
};

export default SignWithGoogle;
