import AnimationPage from '@/shared/components/animations/animation-page';

import usePageData from '@/shared/hooks/use-page-data.hook';

import MainStats from '../components/main-stats';
import { ChartAreaGradient } from '../components/test-chart';
import { ChartPieDonutActive } from '../components/test-2-chart';
import { ChartRadialShape } from '../components/test-3-chart';
import { ChartBarMultiple } from '../components/test-4-chart';

const DashboardPage = () => {
  usePageData({ title: 'Dashboard' });

  return (
    <AnimationPage>
      <MainStats />
      <ChartAreaGradient />
      <ChartPieDonutActive />
      <ChartRadialShape />
      <ChartBarMultiple />
    </AnimationPage>
  );
};

export default DashboardPage;
