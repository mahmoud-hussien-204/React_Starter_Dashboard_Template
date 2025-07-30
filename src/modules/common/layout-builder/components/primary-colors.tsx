import { appConfigActions } from '@/core/store/slices/app-config-slice.store.slice';

import Box from '@/shared/components/box';

import { primaryColors } from '@/shared/constants/themes.constant';

import { useAppDispatch, useAppSelector } from '@/shared/hooks/use-store.hook';

import { cn } from '@/shared/utils/index.utils';

const PrimaryColors = () => {
  const selectedColor = useAppSelector((state) => state.appConfig.primaryColor);

  const dispatch = useAppDispatch();

  return (
    <Box>
      <h4 className='capitalize'>Choose primary color</h4>
      <ul className='mt-1.25rem flex'>
        {primaryColors.map((color, index) => (
          <li
            key={index}
            className={cn(
              'not-first:-ms-1rem bg-background text-muted-foreground p-0.5rem size-3rem cursor-pointer rounded-md border shadow',
              {
                'border-primary': color === selectedColor,
              }
            )}
            onClick={() => dispatch(appConfigActions.setPrimaryColor(color))}
          >
            <div
              className='size-full rounded'
              style={{
                backgroundColor: color,
              }}
            ></div>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default PrimaryColors;
