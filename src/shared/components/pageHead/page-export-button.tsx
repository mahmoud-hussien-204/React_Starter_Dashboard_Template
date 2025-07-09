import { DownloadIcon } from 'lucide-react';

import { Button } from '../ui/button';

interface IProps {
  handleExport: () => void;
}

const PageExportButton = ({ handleExport }: IProps) => {
  return (
    <Button size='lg' variant='secondary' onClick={handleExport}>
      <DownloadIcon /> Export
    </Button>
  );
};

export default PageExportButton;
