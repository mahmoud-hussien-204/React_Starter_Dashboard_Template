import { Badge } from '@/shared/components/ui/badge';

import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card';

import { dashboardMainData } from '@/shared/constants/fakeData/dashboard.fakeData';

import { formatNumberUtil } from '@/shared/utils/numbers.utils';

import { TrendingDownIcon, TrendingUpIcon } from 'lucide-react';

const MainStats = () => {
  return (
    <div className='gap-1.25rem grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {dashboardMainData.map((data, index) => (
        <StatsCard key={index} data={data} />
      ))}
    </div>
  );
};

export default MainStats;

const StatsCard = ({ data }: { data: (typeof dashboardMainData)[0] }) => {
  const isUp = parseInt(data.change) > 0;
  return (
    <Card className='!gap-0.5rem'>
      <CardHeader className='relative'>
        <CardTitle className='text-muted-foreground font-normal'>{data.title}</CardTitle>
        <Badge variant='secondary' className='end-0.75rem absolute top-0'>
          {isUp ? (
            <TrendingUpIcon className='text-success' />
          ) : (
            <TrendingDownIcon className='text-destructive' />
          )}{' '}
          {formatNumberUtil(parseInt(data.change))}%
        </Badge>
      </CardHeader>
      <CardContent>
        <h2 className='text-2xl font-medium'>$ {formatNumberUtil(data.value)}</h2>
      </CardContent>
    </Card>
  );
};
