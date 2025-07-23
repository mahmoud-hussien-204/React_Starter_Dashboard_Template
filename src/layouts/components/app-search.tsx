import { Button } from '@/shared/components/ui/button';

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogScrollableContent,
} from '@/shared/components/ui/dialog';

import { Input } from '@/shared/components/ui/input';

import { modules } from '@/shared/constants/fakeData/modules.fakeData';

import useDialog from '@/shared/hooks/use-dialog.hook';

import { SearchIcon } from 'lucide-react';

import { useDeferredValue, useMemo, useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

const AppSearch = () => {
  const { closeDialog, isDelayedOpenedDialog, isOpenedDialog, showDialog } = useDialog();

  return (
    <>
      <Button variant='ghost' className='hidden md:flex' onClick={showDialog}>
        <SearchIcon size={18} />
        <span className='text-muted-foreground'>Search</span>
      </Button>
      <Dialog open={isOpenedDialog} onOpenChange={closeDialog}>
        <DialogContent>
          <DialogHeader title='Search' description='You can search about any module in the app.' />
          {isDelayedOpenedDialog ? <SearchForm /> : null}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AppSearch;

const SearchForm = () => {
  const [search, setSearch] = useState('');

  const deferredValue = useDeferredValue(search);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredModules = useMemo(() => {
    return modules.filter((mod) => mod.title.toLowerCase().includes(deferredValue.toLowerCase()));
  }, [deferredValue]);

  return (
    <div>
      <DialogScrollableContent>
        <div className='bg-background sticky top-[1px] z-10'>
          <Input type='search' placeholder='Type to search...' onChange={handleSearch} />
        </div>
        <AnimatePresence mode='popLayout'>
          <ul className='mt-1.5rem gap-1rem flex flex-col'>
            {filteredModules.map((mod) => (
              <motion.li
                key={mod.title}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.3 }}
                layout
                className='py-0.5rem px-1rem rounded-md border'
              >
                <div className='mb-0.25rem gap-0.5rem flex items-center'>
                  <mod.icon size={16} />
                  <h4>{mod.title}</h4>
                </div>
                <p className='text-muted-foreground text-sm'>{mod.description}</p>
              </motion.li>
            ))}
          </ul>
        </AnimatePresence>
      </DialogScrollableContent>
      <DialogFooter isLoading={false} isSubmitButton={false} />
    </div>
  );
};
