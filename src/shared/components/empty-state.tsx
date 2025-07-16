import { FolderXIcon } from 'lucide-react';

interface IProps {
  message: string;
  iconSize?: number;
}

const EmptyState = ({ message, iconSize = 80 }: IProps) => {
  return (
    <div className='gap-0.25rem flex flex-col items-center justify-center text-center'>
      <FolderXIcon size={iconSize} className='text-muted-foreground' />
      <h4 className='text-xl'>{message}</h4>
    </div>
  );
};

export default EmptyState;
