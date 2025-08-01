import { defaultAppConfig } from '@/core/config/index.config';

import { Loading } from '@/shared/components/with-loading';

import { useAppSelector } from '@/shared/hooks/use-store.hook';

import { lazy, Suspense, useMemo } from 'react';

const HomeLayout = () => {
  const selectedLayout = useAppSelector((state) => state.appConfig.layout);

  const SelectedLayoutComponent = useMemo(() => {
    // dynamic import wrapped in a promise to avoid crash on wrong file
    return lazy(() =>
      import(`./components/dashboard-layouts/${selectedLayout}`).catch((err) => {
        console.error(
          `Failed to load layout "${selectedLayout}". Falling back to "${defaultAppConfig.layout}".`,
          err
        );
        return import(`./components/dashboard-layouts/${defaultAppConfig.layout}`);
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
