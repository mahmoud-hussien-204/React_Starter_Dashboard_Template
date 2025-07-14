import PageCreateNewButton from '@/shared/components/pageHead/page-create-new-button';

import PageExportButton from '@/shared/components/pageHead/page-export-button';

import PageFiltersButton from '@/shared/components/pageHead/page-filters-button';

import PageHead from '@/shared/components/pageHead/page-head';

import PageSearch from '@/shared/components/pageHead/page-search';

import usePageData from '@/shared/hooks/use-page-data';

import UsersList from '../components/UsersList';

const UsersListPage = () => {
  usePageData({ title: 'Users Management' });

  return (
    <section>
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
            dialogCreateDescription=''
            renderProps={({ closeDialog }) => <div>create new user form</div>}
          />
        </div>
      </PageHead>

      <UsersList />
    </section>
  );
};

export default UsersListPage;
