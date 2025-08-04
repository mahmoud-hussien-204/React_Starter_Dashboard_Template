import AnimationPage from '@/shared/components/animations/animation-page';

import usePageData from '@/shared/hooks/use-page-data.hook';

import MainStats from '../components/main-stats';

import { ChartAreaGradient } from '../components/chart-area-gradient';

import { ChartRadialShape } from '../components/chart-radial-shape';

import { ChartBarMultiple } from '../components/chart-bar-multiple';

import { ChartPieDonutActive } from '../components/chart-pie-donut-active';

import { ChartPieDonutText } from '../components/chart-pie-donut';

import LatestUsers from '../components/latest-users';

const DashboardPage = () => {
  usePageData({ title: 'Dashboard' });

  return (
    <AnimationPage>
      <MainStats />
      <div className='mt-1.25rem gap-1.25rem grid lg:grid-cols-2'>
        <ChartAreaGradient />
        <ChartRadialShape />
      </div>
      <div className='mt-1.25rem'>
        <ChartBarMultiple />
      </div>
      <div className='mt-1.25rem gap-1.25rem grid md:grid-cols-2'>
        <ChartPieDonutActive />
        <ChartPieDonutText />
      </div>
      <div className='mt-1.25rem'>
        <LatestUsers />
      </div>
    </AnimationPage>
  );
};

export default DashboardPage;
