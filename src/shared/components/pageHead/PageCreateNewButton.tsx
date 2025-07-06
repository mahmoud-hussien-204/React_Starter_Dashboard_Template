import { Button } from '../ui/button';

import { PlusIcon } from 'lucide-react';

interface IProps {
  toggleShowCreate: () => void;
  title: string;
}

const PageCreateNewButton = ({ toggleShowCreate, title }: IProps) => {
  return (
    <Button size='lg' onClick={toggleShowCreate}>
      <PlusIcon /> {title}
    </Button>
  );
};

export default PageCreateNewButton;
