import { cn } from '@/shared/utils/index.utils';

import Box from '@/shared/components/box';

import { useAppDispatch, useAppSelector } from '@/shared/hooks/use-store.hook';

import { themes } from '@/shared/constants/themes.constant';

import { appConfigActions } from '@/core/store/slices/app-config-slice.store.slice';

const Themes = () => {
  const selectedTheme = useAppSelector((state) => state.appConfig.theme);

  const dispatch = useAppDispatch();

  return (
    <Box>
      <h4 className='capitalize'>Choose and customize your theme</h4>
      <ul className='mt-1.25rem gap-1.25rem flex flex-wrap'>
        {themes.map((theme, index) => (
          <li
            key={index}
            className='gap-0.5rem flex cursor-pointer flex-col'
            onClick={() => dispatch(appConfigActions.setTheme(theme.value))}
          >
            <div
              className={cn(
                'bg-background text-muted-foreground p-0.5rem flex h-[84px] w-[122px] items-center justify-center rounded-md border',
                {
                  'border-primary bg-primary/5': theme.value === selectedTheme,
                }
              )}
            >
              <theme.icon size={26} />
            </div>
            <span
              className={cn('text-muted-foreground ms-0.5rem text-sm capitalize', {
                'text-primary': theme.value === selectedTheme,
              })}
            >
              {theme.title}
            </span>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Themes;
