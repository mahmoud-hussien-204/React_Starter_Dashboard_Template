import usePageData from '@/shared/hooks/use-page-data.hook';

import AnimationPage from '@/shared/components/animations/animation-page';

const AccountPage = () => {
  usePageData({ title: 'Settings - Account' });

  return <AnimationPage>account</AnimationPage>;
};

export default AccountPage;
