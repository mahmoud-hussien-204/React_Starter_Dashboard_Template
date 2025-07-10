import useURLFilters from '../hooks/use-url-filters';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const PageSize = ({ className }: { className?: string }) => {
  const { sizeSearchParams, setSearchParams } = useURLFilters();

  return (
    <div className={className}>
      <Select
        onValueChange={(value) => setSearchParams({ size: value, page: 1 })}
        defaultValue={sizeSearchParams}
      >
        <SelectTrigger className='!text-foreground max-w-[130px] border-0 bg-transparent px-0'>
          <SelectValue placeholder='Page size' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='15'>15 Rows</SelectItem>
          <SelectItem value='20'>20 Rows</SelectItem>
          <SelectItem value='30'>30 Rows</SelectItem>
          <SelectItem value='40'>40 Rows</SelectItem>
          <SelectItem value='50'>50 Rows</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default PageSize;
