import {
  appConfigPrimaryColorAtom,
  appConfigSetPrimaryColorAtom,
} from '@/core/store/atoms/app-config.atoms';

import Box from '@/shared/components/box';

import { THEME_CONSTANT } from '@/shared/constants/themes.constant';

import { useAtomValue, useSetAtom } from 'jotai';

import { cn } from '@/shared/utils/index.utils';

const PrimaryColors = () => {
  const selectedColor = useAtomValue(appConfigPrimaryColorAtom);

  const setPrimaryColor = useSetAtom(appConfigSetPrimaryColorAtom);

  return (
    <Box>
      <h4 className='capitalize'>Choose primary color</h4>
      <ul className='mt-1.25rem flex'>
        {THEME_CONSTANT.primaryColors.map((color, index) => (
          <li
            key={index}
            className={cn(
              'not-first:-ms-1rem bg-background text-muted-foreground p-0.5rem size-3rem cursor-pointer rounded-md border shadow',
              {
                'border-primary': color === selectedColor,
              }
            )}
            onClick={() => setPrimaryColor(color)}
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
