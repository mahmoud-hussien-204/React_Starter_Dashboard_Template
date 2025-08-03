import { cn } from '../utils/index.utils';

interface IProps extends React.PropsWithChildren {
  className?: string;
  title?: React.ReactNode;
}

const Box = ({ className, children, title }: IProps) => {
  return (
    <div className={cn('bg-muted p-1rem rounded-md border', className)}>
      {title && <h4 className='mb-1.25rem text-lg font-medium'>{title}</h4>}
      {children}
    </div>
  );
};

export default Box;
