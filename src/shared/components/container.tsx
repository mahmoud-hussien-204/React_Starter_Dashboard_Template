import { cn } from '../utils/index.utils';

interface IProps extends React.PropsWithChildren {
  className?: string;
}

const Container = ({ children, className }: IProps) => {
  return <div className={cn('px-1rem py-1.25rem flex-1', className)}>{children}</div>;
};

export default Container;
