import AnimationPage from '@/shared/components/animations/animation-page';

import usePageData from '@/shared/hooks/use-page-data.hook';

import DashboardLayouts from '../components/dashboard-layouts';

import Themes from '../components/themes';

import PrimaryColors from '../components/primary-colors';

const LayoutBuilderPage = () => {
  usePageData({ title: 'Layout Builder' });

  return (
    <AnimationPage>
      <div className='gap-1.5rem flex flex-col'>
        <DashboardLayouts />
        <Themes />
        <PrimaryColors />
      </div>
    </AnimationPage>
  );
};

export default LayoutBuilderPage;
