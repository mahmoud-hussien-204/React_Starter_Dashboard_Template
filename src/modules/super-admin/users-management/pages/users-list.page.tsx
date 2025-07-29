import PageCreateNewButton from '@/shared/components/pageHead/page-create-new-button';

import PageExportButton from '@/shared/components/pageHead/page-export-button';

import PageFiltersButton from '@/shared/components/pageHead/page-filters-button';

import PageHead from '@/shared/components/pageHead/page-head';

import PageSearch from '@/shared/components/pageHead/page-search';

import usePageData from '@/shared/hooks/use-page-data.hook';

import UsersList from '../components/users-list';

import CreateUserForm from '../components/create-user-form';

import AnimationPage from '@/shared/components/animations/animation-page';

const UsersListPage = () => {
  usePageData({ title: 'Users Management' });

  return (
    <AnimationPage>
      <PageHead>
        <div className='gap-0.75rem flex items-center'>
          <PageSearch />
          <PageFiltersButton />
        </div>

        <div className='gap-0.75rem flex items-center'>
          <PageExportButton handleExport={() => console.log('export')} />
          <PageCreateNewButton
            title='Add User'
            dialogCreateTitle='Create new user'
            dialogCreateDescription='You can create a new user by filling out the form below.'
            renderProps={() => <CreateUserForm />}
          />
        </div>
      </PageHead>

      <UsersList />
    </AnimationPage>
  );
};

export default UsersListPage;
