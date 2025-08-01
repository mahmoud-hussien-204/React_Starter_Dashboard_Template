import usePageData from '@/shared/hooks/use-page-data.hook';

import AnimationPage from '@/shared/components/animations/animation-page';

const SecurityPage = () => {
  usePageData({ title: 'Settings - Security' });

  return <AnimationPage>account</AnimationPage>;
};

export default SecurityPage;
