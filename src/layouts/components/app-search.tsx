import { Button } from '@/shared/components/ui/button';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/components/ui/dialog';

import { Input } from '@/shared/components/ui/input';

import { SearchIcon, XIcon } from 'lucide-react';

import { useState } from 'react';

const AppSearch = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
      <DialogTrigger asChild>
        <Button variant='ghost' className='hidden md:flex'>
          <SearchIcon size={18} />
          <span className='text-muted-foreground'>Search</span>
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Search</DialogTitle>
        </DialogHeader>
        <div className='flex items-center space-x-2'>
          <div className='grid flex-1 gap-2'>
            <Input placeholder='Type to search...' autoFocus className='h-10' />
          </div>
          <Button type='button' variant='outline' size='icon' onClick={() => setSearchOpen(false)}>
            <XIcon className='h-4 w-4' />
            <span className='sr-only'>Close</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AppSearch;
