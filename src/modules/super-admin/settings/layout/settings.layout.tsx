import AnimationPage from '@/shared/components/animations/animation-page';

import { useReactQuery } from '@/shared/hooks/use-react-query.hook';

import { Outlet } from 'react-router';

import { apiGetSettings } from '../api/settings.api';

import { QUERY_KEYS_CONSTANT } from '@/shared/constants/query-keys.constant';

import WithLoading from '@/shared/components/with-loading';

import usePageData from '@/shared/hooks/use-page-data.hook';

import { ButtonLink } from '@/shared/components/ui/button-link';

import { BellIcon, LockKeyholeIcon, Users2Icon } from 'lucide-react';

import useIsPathActive from '@/shared/hooks/use-is-path-active.hook';

const SettingsLayout = () => {
  usePageData({ title: 'Settings' });

  const { data, isLoading } = useReactQuery({
    queryFn: () => apiGetSettings(),
    queryKey: [QUERY_KEYS_CONSTANT.settings.list],
  });

  const { isPathActive, pathname } = useIsPathActive();

  return (
    <AnimationPage>
      <WithLoading isLoading={isLoading}>
        <div className='gap-0.25rem sm:gap-1rem mb-1.25rem flex items-center'>
          <ButtonLink
            to='account'
            variant={
              isPathActive('settings/account') || pathname.endsWith('settings')
                ? 'default'
                : 'ghost'
            }
          >
            <Users2Icon />
            Account
          </ButtonLink>
          <ButtonLink
            to='security'
            variant={isPathActive('settings/security') ? 'default' : 'ghost'}
          >
            <LockKeyholeIcon />
            Security
          </ButtonLink>
          <ButtonLink
            to='notifications'
            variant={isPathActive('settings/notifications') ? 'default' : 'ghost'}
          >
            <BellIcon />
            Notifications
          </ButtonLink>
        </div>
        <Outlet context={{ settings: data?.data?.[0] }} />
      </WithLoading>
    </AnimationPage>
  );
};

export default SettingsLayout;
