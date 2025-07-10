import { Label } from '@/shared/components/ui/label';

import { SearchIcon } from 'lucide-react';

import { Input } from '@/shared/components/ui/input';

import useDebounce from '@/shared/hooks/use-debounce';

import { useSearchParams } from 'react-router';

const PageSearch = () => {
  const { debounce } = useDebounce();

  const [, setSearchParams] = useSearchParams();

  const handleSearch = debounce((value: string) => {
    setSearchParams({ search: value });
  }, 500);

  return (
    <div className='relative'>
      <Label
        htmlFor='page-search'
        className='start-0.75rem text-muted-foreground absolute top-1/2 -translate-y-1/2'
      >
        <SearchIcon size={16} />
      </Label>
      <Input
        type='search'
        placeholder='Type to search...'
        id='page-search'
        className='ps-2rem'
        onChange={(e) => handleSearch(e.currentTarget.value)}
      />
    </div>
  );
};

export default PageSearch;
