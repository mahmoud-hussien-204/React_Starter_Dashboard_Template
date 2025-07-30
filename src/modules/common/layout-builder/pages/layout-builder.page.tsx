import AnimationPage from '@/shared/components/animations/animation-page';

import usePageData from '@/shared/hooks/use-page-data.hook';

import DashboardLayouts from '../components/dashboard-layouts';

import Themes from '../components/themes';

import PrimaryColors from '../components/primary-colors';

import { WrenchIcon } from 'lucide-react';

import Box from '@/shared/components/box';

const LayoutBuilderPage = () => {
  usePageData({ title: 'Layout Builder' });

  return (
    <AnimationPage>
      <div className='gap-1.5rem flex flex-col'>
        <Box className='bg-primary/5 gap-1.25rem flex flex-wrap items-center lg:flex-nowrap'>
          <span className='min-w-4rem h-4rem bg-primary text-primary-foreground hidden items-center justify-center rounded-full md:flex'>
            <WrenchIcon size={32} />
          </span>
          <div className='gap-0.25rem flex flex-col'>
            <h5 className=''>
              The layout builder is to assist your set and configure your preferred project layout
              specifications and preview it in real-time.
            </h5>
            <p className='text-sm'>
              Also, you can configurate the Layout in the code{' '}
              <b>(src/core/config/index.config.ts file)</b>. Don't forget clear your local storage
              when you are changing <b>index.config</b>.
            </p>
          </div>
        </Box>
        <DashboardLayouts />
        <Themes />
        <PrimaryColors />
      </div>
    </AnimationPage>
  );
};

export default LayoutBuilderPage;
