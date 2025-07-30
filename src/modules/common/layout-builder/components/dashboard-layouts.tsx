import { layouts } from '../constants/layout-builder.constant';

import { cn } from '@/shared/utils/index.utils';

import Box from '@/shared/components/box';

import { useAppDispatch, useAppSelector } from '@/shared/hooks/use-store.hook';

import { appConfigActions } from '@/core/store/slices/app-config-slice.store.slice';

const DashboardLayouts = () => {
  const selectedLayout = useAppSelector((state) => state.appConfig.layout);

  const dispatch = useAppDispatch();

  return (
    <Box>
      <h4 className='capitalize'>Choose your preferred dashboard layout</h4>
      <ul className='mt-1.25rem gap-1.25rem flex flex-wrap'>
        {layouts.map((layout, index) => (
          <li
            key={index}
            className='gap-0.5rem flex cursor-pointer flex-col'
            onClick={() => dispatch(appConfigActions.setLayout(layout.value))}
          >
            <div
              className={cn('bg-background p-0.5rem rounded-md border', {
                'border-primary bg-primary/5': layout.value === selectedLayout,
              })}
            >
              <layout.icon />
            </div>
            <span
              className={cn('text-muted-foreground ms-0.5rem text-sm', {
                'text-primary': layout.value === selectedLayout,
              })}
            >
              {layout.title}
            </span>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default DashboardLayouts;
