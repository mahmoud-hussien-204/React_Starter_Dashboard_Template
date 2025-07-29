import AnimationPage from '@/shared/components/animations/animation-page';

import Box from '@/shared/components/box';

import usePageData from '@/shared/hooks/use-page-data.hook';

import { layouts } from '../constants/layout-builder.constant';

import { cn } from '@/shared/utils/index.utils';

import { EnumDashboardLayouts } from '@/shared/enums/index.enum';

const LayoutBuilderPage = () => {
  usePageData({ title: 'Layout Builder' });
  return (
    <AnimationPage>
      <Box>
        <h4>Choose your preferred layout</h4>
        <ul className='mt-1.25rem gap-1.25rem flex flex-wrap'>
          {layouts.map((layout, index) => (
            <li key={index} className='gap-0.5rem flex cursor-pointer flex-col'>
              <div
                className={cn('bg-background p-0.5rem rounded-md border', {
                  'border-primary': layout.value === EnumDashboardLayouts.DEFAULT,
                })}
              >
                <layout.icon />
              </div>
              <span className='text-muted-foreground ms-0.5rem text-sm'>{layout.title}</span>
            </li>
          ))}
        </ul>
      </Box>
    </AnimationPage>
  );
};

export default LayoutBuilderPage;
