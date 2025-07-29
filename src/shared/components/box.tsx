import { cn } from '../utils/index.utils';

interface IProps extends React.PropsWithChildren {
  className?: string;
}

const Box = ({ className, children }: IProps) => {
  return <div className={cn('bg-muted p-1rem rounded-md border', className)}>{children}</div>;
};

export default Box;
