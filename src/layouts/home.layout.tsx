import { defaultAppConfig } from '@/core/config/index.config';

import { appConfigLayoutAtom } from '@/core/store/atoms/app-config.atoms';

import { Loading } from '@/shared/components/with-loading';

import { useAtomValue } from 'jotai';

import { lazy, Suspense, useMemo } from 'react';

const HomeLayout = () => {
  const selectedLayout = useAtomValue(appConfigLayoutAtom);

  const SelectedLayoutComponent = useMemo(() => {
    // dynamic import wrapped in a promise to avoid crash on wrong file
    return lazy(() =>
      import(`./components/dashboard-layouts/${selectedLayout}.tsx`).catch((err) => {
        console.error(
          `Failed to load layout "${selectedLayout}". Falling back to "${defaultAppConfig.layout}".`,
          err
        );
        return import(`./components/dashboard-layouts/${defaultAppConfig.layout}.tsx`);
      })
    );
  }, [selectedLayout]);

  return (
    <Suspense fallback={<Loading />}>
      <SelectedLayoutComponent />
    </Suspense>
  );
};

export default HomeLayout;
