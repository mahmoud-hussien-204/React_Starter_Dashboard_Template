import PageCreateNewButton from '@/shared/components/pageHead/PageCreateNewButton';

import PageExportButton from '@/shared/components/pageHead/PageExportButton';

import PageFiltersButton from '@/shared/components/pageHead/PageFiltersButton';

import PageHead from '@/shared/components/pageHead/PageHead';

import PageSearch from '@/shared/components/pageHead/PageSearch';

import usePageData from '@/shared/hooks/usePageData';

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
    </section>
  );
};

export default UsersListPage;
