import usePageData from '@/shared/hooks/use-page-data.hook';

import AnimationPage from '@/shared/components/animations/animation-page';

const NotificationsPage = () => {
  usePageData({ title: 'Settings - Notifications' });

  return <AnimationPage>Notifications</AnimationPage>;
};

export default NotificationsPage;
